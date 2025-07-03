import React from 'react'

const TextArea = ({ 
  label, 
  value, 
  onChange, 
  placeholder, 
  required = false, 
  error = '', 
  rows = 4,
  className = '',
  ...props 
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="block text-sm font-semibold text-navy-800">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent resize-vertical ${
          error 
            ? 'border-red-300 bg-red-50' 
            : 'border-gray-300 hover:border-gray-400 focus:border-gold-500'
        }`}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  )
}

export default TextArea