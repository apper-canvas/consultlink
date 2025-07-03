import React from 'react'
import { NavLink } from 'react-router-dom'
import ApperIcon from '@/components/ApperIcon'

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center">
                <ApperIcon name="Briefcase" className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Consult Pro</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Expert business consulting services that drive measurable results. 
              We help organizations transform challenges into opportunities for growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors duration-200">
                <ApperIcon name="Linkedin" className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors duration-200">
                <ApperIcon name="Twitter" className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors duration-200">
                <ApperIcon name="Facebook" className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/services" className="text-gray-300 hover:text-gold-400 transition-colors duration-200">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/case-studies" className="text-gray-300 hover:text-gold-400 transition-colors duration-200">
                  Case Studies
                </NavLink>
              </li>
              <li>
                <NavLink to="/experts" className="text-gray-300 hover:text-gold-400 transition-colors duration-200">
                  Our Experts
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-gray-300 hover:text-gold-400 transition-colors duration-200">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <ApperIcon name="Phone" className="w-4 h-4 mr-3 text-gold-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <ApperIcon name="Mail" className="w-4 h-4 mr-3 text-gold-400" />
                <span className="text-gray-300">contact@consultpro.com</span>
              </li>
              <li className="flex items-start">
                <ApperIcon name="MapPin" className="w-4 h-4 mr-3 mt-1 text-gold-400" />
                <span className="text-gray-300">
                  123 Business Ave<br />
                  Suite 100<br />
                  New York, NY 10001
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Consult Pro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer