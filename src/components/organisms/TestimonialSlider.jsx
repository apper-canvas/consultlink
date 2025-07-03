import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "ConsultLink transformed our business operations. Their strategic insights helped us increase revenue by 40% in just 6 months. The team's expertise in digital transformation was exactly what we needed.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b172?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, GreenTech Solutions",
    content: "The consulting team at ConsultLink provided invaluable guidance during our expansion phase. Their market analysis and strategic planning helped us enter three new markets successfully.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "COO, Healthcare Plus",
    content: "Working with ConsultLink was a game-changer for our organization. Their process optimization strategies reduced our operational costs by 25% while improving service quality.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Director, Financial Services Corp",
    content: "The expertise and professionalism of the ConsultLink team exceeded our expectations. Their innovative solutions helped us streamline our operations and achieve sustainable growth.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  }
]

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Auto-advance slides
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isHovered])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-gold-500 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <section className="section-padding bg-gradient-to-br from-navy-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses transform and achieve remarkable growth
          </p>
        </div>

        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main testimonial card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold-200 to-gold-100 rounded-full transform translate-x-16 -translate-y-16 opacity-20"></div>
            
            <div className="relative z-10">
              {/* Quote mark */}
              <div className="text-6xl text-gold-400 font-serif mb-6 opacity-30">"</div>
              
              {/* Testimonial content */}
              <div className="mb-8">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                  {testimonials[currentSlide].content}
                </p>
                
                {/* Star rating */}
                <div className="flex items-center gap-1 mb-6">
                  {renderStars(testimonials[currentSlide].rating)}
                </div>
              </div>
              
              {/* Author info */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-gold-200">
                  <img
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonials[currentSlide].name)}&background=d4a574&color=ffffff&size=64`
                    }}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-800 text-lg">
                    {testimonials[currentSlide].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[currentSlide].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-200 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-navy-800" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-200 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-navy-800" />
          </button>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`testimonial-dot ${
                index === currentSlide ? 'testimonial-dot-active' : ''
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress indicator */}
        <div className="max-w-md mx-auto mt-8">
          <div className="w-full bg-gray-200 rounded-full h-1">
            <div 
              className="bg-gradient-to-r from-gold-500 to-gold-600 h-1 rounded-full transition-all duration-300"
              style={{ width: `${((currentSlide + 1) / testimonials.length) * 100}%` }}
            />
          </div>
          <div className="text-center mt-2 text-sm text-gray-500">
            {currentSlide + 1} of {testimonials.length}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSlider