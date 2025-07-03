import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import CaseStudyCard from '@/components/molecules/CaseStudyCard'
import Button from '@/components/atoms/Button'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import { getCaseStudies } from '@/services/api/caseStudyService'

const FeaturedCaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    loadCaseStudies()
  }, [])

  const loadCaseStudies = async () => {
    try {
      setError('')
      setLoading(true)
      const data = await getCaseStudies()
      setCaseStudies(data.slice(0, 3)) // Show only first 3 case studies
    } catch (err) {
      setError('Failed to load case studies. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <Loading />
  if (error) return <Error message={error} onRetry={loadCaseStudies} />

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses like yours achieve remarkable results. 
            Each case study demonstrates our proven methodology and measurable impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((caseStudy, index) => (
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => navigate('/case-studies')}
          >
            View All Case Studies
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedCaseStudies