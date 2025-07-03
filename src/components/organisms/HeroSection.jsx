import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Button from '@/components/atoms/Button'
import ApperIcon from '@/components/ApperIcon'

const HeroSection = () => {
  const navigate = useNavigate()

  return (
    <section className="relative bg-gradient-to-br from-navy-800 via-navy-700 to-navy-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gold-500/10 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Transform Your Business with 
              <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent"> Expert Guidance</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We deliver strategic consulting solutions that drive measurable results. 
              From operational efficiency to digital transformation, our experts help you navigate complex challenges and achieve sustainable growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
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
                onClick={() => navigate('/case-studies')}
                className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-navy-800"
              >
                View Case Studies
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-400 mb-2">500+</div>
                <div className="text-sm text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-400 mb-2">98%</div>
                <div className="text-sm text-gray-300">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-400 mb-2">15+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="absolute top-4 right-4">
                <ApperIcon name="TrendingUp" className="w-8 h-8 text-gold-400" />
              </div>
              
              <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <ApperIcon name="CheckCircle" className="w-5 h-5 text-gold-400 mr-3" />
                  <span>Free initial consultation</span>
                </div>
                <div className="flex items-center">
                  <ApperIcon name="CheckCircle" className="w-5 h-5 text-gold-400 mr-3" />
                  <span>Customized strategy roadmap</span>
                </div>
                <div className="flex items-center">
                  <ApperIcon name="CheckCircle" className="w-5 h-5 text-gold-400 mr-3" />
                  <span>Expert team assignment</span>
                </div>
                <div className="flex items-center">
                  <ApperIcon name="CheckCircle" className="w-5 h-5 text-gold-400 mr-3" />
                  <span>Measurable results tracking</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-sm text-gray-300 mb-4">
                  Join hundreds of satisfied clients who have transformed their businesses with our expertise.
                </p>
                <Button 
                  variant="primary" 
                  size="md"
                  onClick={() => navigate('/book-consultation')}
                  className="w-full"
                >
                  Schedule Your Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection