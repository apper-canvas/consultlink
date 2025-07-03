import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import ExpertCard from '@/components/molecules/ExpertCard'
import Button from '@/components/atoms/Button'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import Empty from '@/components/ui/Empty'
import { getExperts } from '@/services/api/expertService'

const Experts = () => {
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
      setExperts(data)
    } catch (err) {
      setError('Failed to load experts. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <Loading />
  if (error) return <Error message={error} onRetry={loadExperts} />
  
  if (experts.length === 0) {
    return (
      <Empty
        title="No Experts Available"
        description="We're currently building our expert team. Please check back soon to meet our consultants."
        actionText="Contact Us"
        onAction={() => navigate('/contact')}
        icon="Users"
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
            Our Expert Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the seasoned professionals who bring decades of experience across industries 
            and business functions. Our experts are your trusted advisors for transformation and growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
          className="text-center bg-gradient-to-br from-navy-800 to-navy-900 text-white rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold mb-6">Work with Our Experts</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Book a consultation to discuss your business challenges with one of our experienced consultants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => navigate('/book-consultation')}
            >
              Book Consultation
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => navigate('/contact')}
              className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-navy-800"
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Experts