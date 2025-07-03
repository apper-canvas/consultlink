import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "react-toastify";
import ApperIcon from "@/components/ApperIcon";
import Select from "@/components/atoms/Select";
import TextArea from "@/components/atoms/TextArea";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";

const NewsletterModal = ({ isOpen, onClose, onSubscribe }) => {
  const [email, setEmail] = useState('')
  const [subscribing, setSubscribing] = useState(false)

  const handleSubscribe = async (e) => {
    e.preventDefault()
    
    if (!email.trim()) {
      toast.error('Please enter your email address')
      return
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error('Please enter a valid email address')
      return
    }

    try {
      setSubscribing(true)
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast.success('Successfully subscribed to our newsletter!')
      setEmail('')
      onSubscribe(email)
      onClose()
    } catch (err) {
      toast.error('Failed to subscribe. Please try again.')
    } finally {
      setSubscribing(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-xl p-8 max-w-md w-full shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <ApperIcon name="X" size={20} />
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <ApperIcon name="Mail" className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy-800 mb-2">Stay Connected!</h3>
              <p className="text-gray-600">
                Get exclusive insights, industry trends, and business growth tips delivered straight to your inbox.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="space-y-4">
              <Input
                type="email"
                label="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
              />
              
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={subscribing}
                className="w-full"
              >
                {subscribing ? 'Subscribing...' : 'Subscribe to Newsletter'}
              </Button>
            </form>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-start">
                <ApperIcon name="Shield" className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-navy-800 text-sm mb-1">Privacy Guaranteed</h4>
                  <p className="text-gray-600 text-xs">
                    We respect your privacy. Your email will never be shared, sold, or used for spam. 
                    You can unsubscribe at any time with one click.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: '',
    message: ''
  })
  
const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [showNewsletterModal, setShowNewsletterModal] = useState(false)
  const inquiryTypes = [
    { value: 'consultation', label: 'General Consultation' },
    { value: 'partnership', label: 'Partnership Opportunity' },
    { value: 'support', label: 'Support Request' },
    { value: 'other', label: 'Other' },
  ]

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    if (!formData.company.trim()) newErrors.company = 'Company is required'
    if (!formData.inquiryType) newErrors.inquiryType = 'Please select an inquiry type'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return

    try {
      setSubmitting(true)
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast.success('Message sent successfully! We will get back to you within 24 hours.')
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        inquiryType: '',
        message: ''
      })
      
      // Show newsletter modal after successful submission
      setTimeout(() => {
        setShowNewsletterModal(true)
      }, 1500)
    } catch (err) {
      toast.error('Failed to send message. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const handleNewsletterSubscribe = (email) => {
    // Newsletter subscription logic handled in modal
    console.log('Newsletter subscription:', email)
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
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business? Get in touch with our team of experts. 
            We're here to answer your questions and discuss how we can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-navy-800 mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Full Name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter your full name"
                    required
                    error={errors.name}
                  />
                  
                  <Input
                    label="Email Address"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Enter your email"
                    required
                    error={errors.email}
                  />
                </div>

                <Input
                  label="Company Name"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  placeholder="Enter your company name"
                  required
                  error={errors.company}
                />

                <Select
                  label="Inquiry Type"
                  value={formData.inquiryType}
                  onChange={(e) => handleInputChange('inquiryType', e.target.value)}
                  options={inquiryTypes}
                  placeholder="Select inquiry type"
                  required
                  error={errors.inquiryType}
                />

                <TextArea
                  label="Message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Tell us about your business needs or questions..."
                  rows={5}
                  required
                  error={errors.message}
/>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={submitting}
                  className="w-full"
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-navy-800 mb-6">Our Office</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <ApperIcon name="MapPin" className="w-6 h-6 text-gold-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-navy-800 mb-2">Address</h4>
                    <p className="text-gray-600">
                      123 Business Ave<br />
                      Suite 100<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <ApperIcon name="Phone" className="w-6 h-6 text-gold-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-navy-800 mb-2">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <ApperIcon name="Mail" className="w-6 h-6 text-gold-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-navy-800 mb-2">Email</h4>
                    <p className="text-gray-600">contact@consultpro.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <ApperIcon name="Clock" className="w-6 h-6 text-gold-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-navy-800 mb-2">Business Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-br from-gold-50 to-gold-100 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-navy-800 mb-4">Response Time</h3>
              <div className="flex items-center mb-3">
                <ApperIcon name="Clock" className="w-5 h-5 text-gold-500 mr-3" />
                <span className="font-semibold text-navy-800">Within 24 hours</span>
              </div>
              <p className="text-gray-600 text-sm">
                We typically respond to all inquiries within 24 hours during business days. 
                For urgent matters, please call us directly.
              </p>
            </div>

            {/* Social Links */}
            <div className="card p-8">
              <h3 className="text-xl font-bold text-navy-800 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center text-white hover:scale-105 transition-transform duration-200"
                >
                  <ApperIcon name="Linkedin" className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center text-white hover:scale-105 transition-transform duration-200"
                >
                  <ApperIcon name="Twitter" className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center text-white hover:scale-105 transition-transform duration-200"
                >
                  <ApperIcon name="Facebook" className="w-6 h-6" />
                </a>
              </div>
</div>
          </motion.div>
        </div>
      </div>

      {/* Newsletter Modal */}
      <NewsletterModal
        isOpen={showNewsletterModal}
        onClose={() => setShowNewsletterModal(false)}
        onSubscribe={handleNewsletterSubscribe}
      />
    </div>
  )
}

export default Contact