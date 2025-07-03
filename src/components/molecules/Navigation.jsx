import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'
import Button from '@/components/atoms/Button'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Services', path: '/services' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Our Experts', path: '/experts' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center">
              <ApperIcon name="Briefcase" className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">Consult Pro</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `font-semibold transition-colors duration-200 hover:text-gold-600 ${
                    isActive ? 'text-gold-600' : 'text-navy-800'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <Button variant="primary" size="sm">
              <NavLink to="/book-consultation">Book Consultation</NavLink>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-navy-800 hover:text-gold-600 transition-colors duration-200"
            >
              <ApperIcon name={isOpen ? "X" : "Menu"} className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                      `block font-semibold transition-colors duration-200 hover:text-gold-600 ${
                        isActive ? 'text-gold-600' : 'text-navy-800'
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                ))}
                <div className="pt-2">
                  <Button variant="primary" size="sm" className="w-full">
                    <NavLink to="/book-consultation" onClick={() => setIsOpen(false)}>
                      Book Consultation
                    </NavLink>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navigation