import mockServices from '@/services/mockData/services.json'

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const getServices = async () => {
  await delay(300)
  return [...mockServices]
}

export const getServiceById = async (id) => {
  await delay(200)
  const service = mockServices.find(s => s.Id === id)
  if (!service) {
    throw new Error('Service not found')
  }
  return { ...service }
}

export const createService = async (serviceData) => {
  await delay(500)
  const newService = {
    ...serviceData,
    Id: Math.max(...mockServices.map(s => s.Id)) + 1
  }
  mockServices.push(newService)
  return { ...newService }
}

export const updateService = async (id, serviceData) => {
  await delay(400)
  const index = mockServices.findIndex(s => s.Id === id)
  if (index === -1) {
    throw new Error('Service not found')
  }
  mockServices[index] = { ...mockServices[index], ...serviceData }
  return { ...mockServices[index] }
}

export const deleteService = async (id) => {
  await delay(300)
  const index = mockServices.findIndex(s => s.Id === id)
  if (index === -1) {
    throw new Error('Service not found')
  }
  const deletedService = mockServices.splice(index, 1)[0]
  return { ...deletedService }
}