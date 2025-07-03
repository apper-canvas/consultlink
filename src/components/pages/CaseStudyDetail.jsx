import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '@/components/atoms/Button'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import ApperIcon from '@/components/ApperIcon'
import { getCaseStudyById } from '@/services/api/caseStudyService'

const CaseStudyDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [caseStudy, setCaseStudy] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    loadCaseStudy()
  }, [id])

  const loadCaseStudy = async () => {
    try {
      setError('')
      setLoading(true)
      const data = await getCaseStudyById(parseInt(id))
      setCaseStudy(data)
    } catch (err) {
      setError('Failed to load case study. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <Loading />
  if (error) return <Error message={error} onRetry={loadCaseStudy} />
  if (!caseStudy) {
    return (
      <Error 
        message="Case study not found. The case study you're looking for doesn't exist." 
        onRetry={() => navigate('/case-studies')}
      />
    )
  }

  return (
    <div className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Button
            variant="outline"
            onClick={() => navigate('/case-studies')}
            className="mb-6"
          >
            <ApperIcon name="ArrowLeft" className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card p-0 overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-br from-navy-800 to-navy-900 text-white p-8">
            <div className="flex items-center mb-4">
              <span className="bg-gold-500 text-white text-sm px-3 py-1 rounded-full mr-3">
                {caseStudy.industry}
              </span>
              <span className="text-gold-400 font-semibold">Success Story</span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">{caseStudy.client}</h1>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Challenge */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy-800 mb-4 flex items-center">
                <ApperIcon name="AlertTriangle" className="w-6 h-6 mr-3 text-gold-500" />
                The Challenge
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {caseStudy.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy-800 mb-4 flex items-center">
                <ApperIcon name="Lightbulb" className="w-6 h-6 mr-3 text-gold-500" />
                Our Solution
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {caseStudy.solution}
              </p>
            </div>

            {/* Results */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy-800 mb-6 flex items-center">
                <ApperIcon name="TrendingUp" className="w-6 h-6 mr-3 text-gold-500" />
                Results Achieved
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="bg-surface p-6 rounded-lg">
                    <div className="flex items-center">
                      <ApperIcon name="CheckCircle" className="w-5 h-5 text-gold-500 mr-3 flex-shrink-0" />
                      <span className="font-semibold text-navy-800">{result}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            {caseStudy.testimonial && (
              <div className="bg-gradient-to-br from-gold-50 to-gold-100 p-8 rounded-xl">
                <ApperIcon name="Quote" className="w-8 h-8 text-gold-500 mb-4" />
                <blockquote className="text-lg italic text-gray-700 mb-4">
                  "{caseStudy.testimonial}"
                </blockquote>
                <cite className="text-gold-600 font-semibold">— {caseStudy.client}</cite>
              </div>
            )}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center bg-gradient-to-br from-navy-800 to-navy-900 text-white rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold mb-6">Ready for Similar Results?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business achieve extraordinary results like {caseStudy.client}.
          </p>
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => navigate('/book-consultation')}
          >
            Schedule Your Consultation
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

export default CaseStudyDetail