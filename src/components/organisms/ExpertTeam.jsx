import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import ExpertCard from '@/components/molecules/ExpertCard'
import Button from '@/components/atoms/Button'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import { getExperts } from '@/services/api/expertService'

const ExpertTeam = () => {
  const [experts, setExperts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    loadExperts()
  }, [])

  const loadExperts = async () => {
    try {
      setError('')
      setLoading(true)
      const data = await getExperts()
      setExperts(data.slice(0, 3)) // Show only first 3 experts
    } catch (err) {
      setError('Failed to load experts. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <Loading />
  if (error) return <Error message={error} onRetry={loadExperts} />

  return (
    <section className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Meet Our Experts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of seasoned professionals brings decades of combined experience 
            across various industries and business functions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {experts.map((expert, index) => (
            <motion.div
              key={expert.Id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ExpertCard expert={expert} />
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
            onClick={() => navigate('/experts')}
          >
            Meet All Experts
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default ExpertTeam