import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import CaseStudyCard from "@/components/molecules/CaseStudyCard";
import Select from "@/components/atoms/Select";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import { getCaseStudies } from "@/services/api/caseStudyService";

const CaseStudies = () => {
  const navigate = useNavigate();
  const [caseStudies, setCaseStudies] = useState([])
  const [filteredCaseStudies, setFilteredCaseStudies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedIndustry, setSelectedIndustry] = useState('')

  useEffect(() => {
    loadCaseStudies()
  }, [])

  useEffect(() => {
    filterCaseStudies()
  }, [caseStudies, selectedIndustry])

  const loadCaseStudies = async () => {
    try {
      setError('')
      setLoading(true)
      const data = await getCaseStudies()
      setCaseStudies(data)
    } catch (err) {
      setError('Failed to load case studies. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const filterCaseStudies = () => {
    if (!selectedIndustry) {
      setFilteredCaseStudies(caseStudies)
    } else {
      setFilteredCaseStudies(
        caseStudies.filter(caseStudy => 
          caseStudy.industry.toLowerCase() === selectedIndustry.toLowerCase()
        )
      )
    }
  }

  const industries = [...new Set(caseStudies.map(cs => cs.industry))]
  const industryOptions = industries.map(industry => ({
    value: industry,
    label: industry
  }))

  if (loading) return <Loading />
  if (error) return <Error message={error} onRetry={loadCaseStudies} />
  
  if (caseStudies.length === 0) {
    return (
      <Empty
        title="No Case Studies Available"
        description="We're currently preparing our case studies. Please check back soon to see our success stories."
        actionText="Contact Us"
        onAction={() => navigate('/contact')}
        icon="FileText"
      />
    )
  }

  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-bold gradient-text mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real clients. Explore our portfolio of successful consulting engagements 
            and discover how we've helped businesses achieve their goals.
          </p>
        </motion.div>

        {industries.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-12 max-w-md mx-auto"
          >
            <Select
              label="Filter by Industry"
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              options={industryOptions}
              placeholder="All Industries"
            />
          </motion.div>
        )}

        {filteredCaseStudies.length === 0 ? (
          <Empty
            title="No Case Studies Found"
            description={`No case studies found for the selected industry. Try selecting a different industry or view all case studies.`}
            actionText="Clear Filter"
            onAction={() => setSelectedIndustry('')}
            icon="Filter"
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.Id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CaseStudyCard caseStudy={caseStudy} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default CaseStudies