import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import ApperIcon from '@/components/ApperIcon'
import Button from '@/components/atoms/Button'

const ServiceCard = ({ service }) => {
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="card p-8 h-full flex flex-col"
    >
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center mr-4">
          <ApperIcon name={service.icon} className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-navy-800">{service.title}</h3>
      </div>
      
      <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
      
      <div className="space-y-3 mb-6">
        {service.benefits.slice(0, 3).map((benefit, index) => (
          <div key={index} className="flex items-center">
            <ApperIcon name="Check" className="w-5 h-5 text-gold-500 mr-3 flex-shrink-0" />
            <span className="text-sm text-gray-700">{benefit}</span>
          </div>
        ))}
      </div>
      
      <div className="flex items-center justify-between mt-auto">
        <div className="text-sm text-gray-500">
          <span className="font-semibold text-navy-800">{service.duration}</span> | 
          <span className="font-bold text-gold-600 ml-1">{service.price}</span>
        </div>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => navigate('/services')}
        >
          Learn More
        </Button>
      </div>
    </motion.div>
  )
}

export default ServiceCard