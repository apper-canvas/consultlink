import mockExperts from '@/services/mockData/experts.json'

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const getExperts = async () => {
  await delay(300)
  return [...mockExperts]
}

export const getExpertById = async (id) => {
  await delay(200)
  const expert = mockExperts.find(e => e.Id === id)
  if (!expert) {
    throw new Error('Expert not found')
  }
  return { ...expert }
}

export const createExpert = async (expertData) => {
  await delay(500)
  const newExpert = {
    ...expertData,
    Id: Math.max(...mockExperts.map(e => e.Id)) + 1
  }
  mockExperts.push(newExpert)
  return { ...newExpert }
}

export const updateExpert = async (id, expertData) => {
  await delay(400)
  const index = mockExperts.findIndex(e => e.Id === id)
  if (index === -1) {
    throw new Error('Expert not found')
  }
  mockExperts[index] = { ...mockExperts[index], ...expertData }
  return { ...mockExperts[index] }
}

export const deleteExpert = async (id) => {
  await delay(300)
  const index = mockExperts.findIndex(e => e.Id === id)
  if (index === -1) {
    throw new Error('Expert not found')
  }
  const deletedExpert = mockExperts.splice(index, 1)[0]
  return { ...deletedExpert }
}