import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Layout from '@/components/organisms/Layout'
import Home from '@/components/pages/Home'
import Services from '@/components/pages/Services'
import CaseStudies from '@/components/pages/CaseStudies'
import CaseStudyDetail from '@/components/pages/CaseStudyDetail'
import Experts from '@/components/pages/Experts'
import BookConsultation from '@/components/pages/BookConsultation'
import Contact from '@/components/pages/Contact'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
            <Route path="/experts" element={<Experts />} />
            <Route path="/book-consultation" element={<BookConsultation />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          style={{ zIndex: 9999 }}
        />
      </div>
    </Router>
  )
}

export default App