import React from 'react'

const Loading = () => {
  return (
    <div className="animate-pulse section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header skeleton */}
        <div className="text-center mb-16">
          <div className="h-12 bg-gray-200 rounded-lg w-1/2 mx-auto mb-4"></div>
          <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto"></div>
        </div>

        {/* Content grid skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-200 rounded-lg mr-4"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
              </div>
              <div className="h-10 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Loading