import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const CaseStudyCard = ({ caseStudy }) => {
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      className="card overflow-hidden cursor-pointer"
      onClick={() => navigate(`/case-studies/${caseStudy.Id}`)}
    >
      <div className="relative h-48 bg-gradient-to-br from-navy-600 to-navy-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="text-sm font-semibold mb-1">{caseStudy.industry}</div>
          <h3 className="text-lg font-bold mb-2">{caseStudy.client}</h3>
          <div className="flex flex-wrap gap-2">
            {caseStudy.results.slice(0, 2).map((result, index) => (
              <span key={index} className="text-xs bg-gold-500 text-white px-2 py-1 rounded-full">
                {result}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h4 className="text-lg font-bold text-navy-800 mb-3">Challenge</h4>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {caseStudy.challenge}
        </p>
        
        <div className="mt-4 pt-4 border-t border-gray-200">
          <span className="text-gold-600 font-semibold text-sm hover:text-gold-700">
            Read Full Case Study →
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default CaseStudyCard