import React from 'react'
import HeroSection from '@/components/organisms/HeroSection'
import ServicesOverview from '@/components/organisms/ServicesOverview'
import FeaturedCaseStudies from '@/components/organisms/FeaturedCaseStudies'
import ExpertTeam from '@/components/organisms/ExpertTeam'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServicesOverview />
      <FeaturedCaseStudies />
      <ExpertTeam />
    </div>
  )
}

export default Home