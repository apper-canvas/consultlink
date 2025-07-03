import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import Input from '@/components/atoms/Input'
import Select from '@/components/atoms/Select'
import TextArea from '@/components/atoms/TextArea'
import Button from '@/components/atoms/Button'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import { getServices } from '@/services/api/serviceService'
import { getExperts } from '@/services/api/expertService'
import { createBooking } from '@/services/api/bookingService'

const BookingForm = () => {
  const [services, setServices] = useState([])
  const [experts, setExperts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  
  const [formData, setFormData] = useState({
    serviceId: '',
    expertId: '',
    date: '',
    time: '',
    clientName: '',
    clientEmail: '',
    clientCompany: '',
    message: ''
  })

  const [errors, setErrors] = useState({})

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      setError('')
      setLoading(true)
      const [servicesData, expertsData] = await Promise.all([
        getServices(),
        getExperts()
      ])
      setServices(servicesData)
      setExperts(expertsData)
    } catch (err) {
      setError('Failed to load booking data. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.clientName.trim()) newErrors.clientName = 'Name is required'
    if (!formData.clientEmail.trim()) newErrors.clientEmail = 'Email is required'
    if (!formData.clientCompany.trim()) newErrors.clientCompany = 'Company is required'
    if (!formData.serviceId) newErrors.serviceId = 'Please select a service'
    if (!formData.date) newErrors.date = 'Please select a date'
    if (!formData.time) newErrors.time = 'Please select a time'
    
    if (formData.clientEmail && !/\S+@\S+\.\S+/.test(formData.clientEmail)) {
      newErrors.clientEmail = 'Please enter a valid email'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return

    try {
      setSubmitting(true)
      await createBooking(formData)
      toast.success('Consultation booked successfully! We will contact you shortly.')
      
      // Reset form
      setFormData({
        serviceId: '',
        expertId: '',
        date: '',
        time: '',
        clientName: '',
        clientEmail: '',
        clientCompany: '',
        message: ''
      })
    } catch (err) {
      toast.error('Failed to book consultation. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const timeSlots = [
    { value: '09:00', label: '9:00 AM' },
    { value: '10:00', label: '10:00 AM' },
    { value: '11:00', label: '11:00 AM' },
    { value: '14:00', label: '2:00 PM' },
    { value: '15:00', label: '3:00 PM' },
    { value: '16:00', label: '4:00 PM' },
  ]

  if (loading) return <Loading />
  if (error) return <Error message={error} onRetry={loadData} />

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card p-8 max-w-2xl mx-auto"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold gradient-text mb-4">Book Your Consultation</h2>
        <p className="text-gray-600">
          Schedule a free consultation with our experts to discuss your business needs and goals.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            value={formData.clientName}
            onChange={(e) => handleInputChange('clientName', e.target.value)}
            placeholder="Enter your full name"
            required
            error={errors.clientName}
          />
          
          <Input
            label="Email Address"
            type="email"
            value={formData.clientEmail}
            onChange={(e) => handleInputChange('clientEmail', e.target.value)}
            placeholder="Enter your email"
            required
            error={errors.clientEmail}
          />
        </div>

        <Input
          label="Company Name"
          value={formData.clientCompany}
          onChange={(e) => handleInputChange('clientCompany', e.target.value)}
          placeholder="Enter your company name"
          required
          error={errors.clientCompany}
        />

        <Select
          label="Service Type"
          value={formData.serviceId}
          onChange={(e) => handleInputChange('serviceId', e.target.value)}
          options={services.map(service => ({
            value: service.Id,
            label: service.title
          }))}
          placeholder="Select a service"
          required
          error={errors.serviceId}
        />

        <Select
          label="Preferred Expert (Optional)"
          value={formData.expertId}
          onChange={(e) => handleInputChange('expertId', e.target.value)}
          options={experts.map(expert => ({
            value: expert.Id,
            label: expert.name
          }))}
          placeholder="Select an expert"
          error={errors.expertId}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Preferred Date"
            type="date"
            value={formData.date}
            onChange={(e) => handleInputChange('date', e.target.value)}
            min={new Date().toISOString().split('T')[0]}
            required
            error={errors.date}
          />
          
          <Select
            label="Preferred Time"
            value={formData.time}
            onChange={(e) => handleInputChange('time', e.target.value)}
            options={timeSlots}
            placeholder="Select a time"
            required
            error={errors.time}
          />
        </div>

        <TextArea
          label="Additional Information"
          value={formData.message}
          onChange={(e) => handleInputChange('message', e.target.value)}
          placeholder="Tell us about your business challenges or goals..."
          rows={4}
        />

        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={submitting}
          className="w-full"
        >
          {submitting ? 'Booking...' : 'Book Consultation'}
        </Button>
      </form>

      <div className="mt-8 p-6 bg-surface rounded-lg">
        <h3 className="font-semibold text-navy-800 mb-3">What to Expect:</h3>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>• 30-60 minute consultation session</li>
          <li>• Detailed discussion of your business challenges</li>
          <li>• Initial recommendations and strategy outline</li>
          <li>• Next steps and engagement options</li>
        </ul>
      </div>
    </motion.div>
  )
}

export default BookingForm