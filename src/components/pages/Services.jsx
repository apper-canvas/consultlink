import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import ServiceCard from '@/components/molecules/ServiceCard'
import Button from '@/components/atoms/Button'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import Empty from '@/components/ui/Empty'
import { getServices } from '@/services/api/serviceService'

const Services = () => {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    loadServices()
  }, [])

  const loadServices = async () => {
    try {
      setError('')
      setLoading(true)
      const data = await getServices()
      setServices(data)
    } catch (err) {
      setError('Failed to load services. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <Loading />
  if (error) return <Error message={error} onRetry={loadServices} />
  if (services.length === 0) {
    return (
      <Empty
        title="No Services Available"
        description="We're currently updating our service offerings. Please check back soon."
        actionText="Contact Us"
        onAction={() => navigate('/contact')}
        icon="Briefcase"
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
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive consulting solutions designed to transform your business. 
            From strategy development to implementation, we're your trusted partner for growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.Id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center bg-gradient-to-br from-navy-800 to-navy-900 text-white rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can help solve your business challenges 
            and drive measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => navigate('/book-consultation')}
            >
              Book Free Consultation
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

export default Services