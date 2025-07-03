import React from 'react'
import { motion } from 'framer-motion'
import BookingForm from '@/components/organisms/BookingForm'
import ApperIcon from '@/components/ApperIcon'

const BookConsultation = () => {
  return (
    <div className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-bold gradient-text mb-6">
            Book Your Consultation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take the first step towards transforming your business. Schedule a free consultation 
            with our experts to discuss your challenges and opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <BookingForm />
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* Why Choose Us */}
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-navy-800 mb-6">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <ApperIcon name="Award" className="w-6 h-6 text-gold-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-navy-800">Proven Track Record</h4>
                    <p className="text-gray-600 text-sm">500+ successful projects with measurable results</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ApperIcon name="Users" className="w-6 h-6 text-gold-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-navy-800">Expert Team</h4>
                    <p className="text-gray-600 text-sm">Industry veterans with 15+ years experience</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ApperIcon name="Target" className="w-6 h-6 text-gold-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-navy-800">Tailored Solutions</h4>
                    <p className="text-gray-600 text-sm">Customized strategies for your unique challenges</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ApperIcon name="Clock" className="w-6 h-6 text-gold-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-navy-800">Quick Response</h4>
                    <p className="text-gray-600 text-sm">We respond within 24 hours of booking</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-navy-800 mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <ApperIcon name="Phone" className="w-5 h-5 text-gold-500 mr-3" />
                  <span className="text-gray-700">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <ApperIcon name="Mail" className="w-5 h-5 text-gold-500 mr-3" />
                  <span className="text-gray-700">contact@consultpro.com</span>
                </div>
                <div className="flex items-start">
                  <ApperIcon name="MapPin" className="w-5 h-5 text-gold-500 mr-3 mt-1" />
                  <div className="text-gray-700">
                    123 Business Ave<br />
                    Suite 100<br />
                    New York, NY 10001
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-br from-gold-50 to-gold-100 p-8 rounded-xl">
              <ApperIcon name="Quote" className="w-8 h-8 text-gold-500 mb-4" />
              <blockquote className="text-gray-700 italic mb-4">
                "Consult Pro transformed our operations and increased our efficiency by 40%. 
                Their expertise and guidance were invaluable."
              </blockquote>
              <cite className="text-gold-600 font-semibold">— Sarah Johnson, CEO TechCorp</cite>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default BookConsultation