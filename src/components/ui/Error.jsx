import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'
import Button from '@/components/atoms/Button'

const Error = ({ message = 'Something went wrong', onRetry }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="section-padding"
    >
      <div className="max-w-md mx-auto text-center">
        <div className="w-16 h-16 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
          <ApperIcon name="AlertCircle" className="w-8 h-8 text-red-600" />
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-4">Oops! Something went wrong</h3>
        <p className="text-gray-600 mb-8">{message}</p>
        
        {onRetry && (
          <Button variant="primary" onClick={onRetry}>
            <ApperIcon name="RefreshCw" className="w-4 h-4 mr-2" />
            Try Again
          </Button>
        )}
      </div>
    </motion.div>
  )
}

export default Error