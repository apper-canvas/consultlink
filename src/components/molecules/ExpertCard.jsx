import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const ExpertCard = ({ expert }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="card p-8 text-center"
    >
      <div className="relative mb-6">
        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-gray-200 to-gray-300 border-4 border-gold-400 flex items-center justify-center">
          <ApperIcon name="User" className="w-12 h-12 text-gray-600" />
        </div>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gold-500 text-white text-xs px-3 py-1 rounded-full">
          {expert.experience}+ years
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-navy-800 mb-1">{expert.name}</h3>
      <p className="text-gold-600 font-semibold mb-4">{expert.title}</p>
      
      <p className="text-gray-600 text-sm mb-6 leading-relaxed">
        {expert.bio}
      </p>
      
      <div className="space-y-2 mb-6">
        <h4 className="text-sm font-semibold text-navy-800">Specialties:</h4>
        <div className="flex flex-wrap gap-2 justify-center">
          {expert.specialties.map((specialty, index) => (
            <span key={index} className="bg-surface text-navy-700 text-xs px-3 py-1 rounded-full">
              {specialty}
            </span>
          ))}
        </div>
      </div>
      
      {expert.linkedIn && (
        <a
          href={expert.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-navy-600 hover:text-gold-600 transition-colors duration-200"
        >
          <ApperIcon name="Linkedin" className="w-4 h-4 mr-2" />
          <span className="text-sm font-semibold">Connect on LinkedIn</span>
        </a>
      )}
    </motion.div>
  )
}

export default ExpertCard