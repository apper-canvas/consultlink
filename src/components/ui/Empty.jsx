import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'
import Button from '@/components/atoms/Button'

const Empty = ({ 
  title = 'No items found', 
  description = 'There are no items to display at the moment.',
  actionText = 'Get Started',
  onAction,
  icon = 'Search'
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center py-16"
    >
      <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-gold-100 to-gold-200 rounded-full flex items-center justify-center">
        <ApperIcon name={icon} className="w-12 h-12 text-gold-600" />
      </div>
      
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">{description}</p>
      
      {onAction && (
        <Button variant="primary" onClick={onAction}>
          {actionText}
        </Button>
      )}
    </motion.div>
  )
}

export default Empty