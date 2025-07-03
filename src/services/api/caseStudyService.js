import mockCaseStudies from '@/services/mockData/caseStudies.json'

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const getCaseStudies = async () => {
  await delay(350)
  return [...mockCaseStudies]
}

export const getCaseStudyById = async (id) => {
  await delay(250)
  const caseStudy = mockCaseStudies.find(cs => cs.Id === id)
  if (!caseStudy) {
    throw new Error('Case study not found')
  }
return { ...caseStudy }
}

export const getTestimonials = async () => {
  await delay(200)
  return mockCaseStudies.map(cs => ({
    Id: cs.Id,
    client: cs.client,
    testimonial: cs.testimonial,
    rating: cs.rating,
    logoUrl: cs.logoUrl,
    results: cs.results.slice(0, 2) // Show top 2 results
  }))
}
export const createCaseStudy = async (caseStudyData) => {
  await delay(500)
  const newCaseStudy = {
    ...caseStudyData,
    Id: Math.max(...mockCaseStudies.map(cs => cs.Id)) + 1
  }
  mockCaseStudies.push(newCaseStudy)
  return { ...newCaseStudy }
}

export const updateCaseStudy = async (id, caseStudyData) => {
  await delay(400)
  const index = mockCaseStudies.findIndex(cs => cs.Id === id)
  if (index === -1) {
    throw new Error('Case study not found')
  }
  mockCaseStudies[index] = { ...mockCaseStudies[index], ...caseStudyData }
  return { ...mockCaseStudies[index] }
}

export const deleteCaseStudy = async (id) => {
  await delay(300)
  const index = mockCaseStudies.findIndex(cs => cs.Id === id)
  if (index === -1) {
    throw new Error('Case study not found')
  }
  const deletedCaseStudy = mockCaseStudies.splice(index, 1)[0]
  return { ...deletedCaseStudy }
}