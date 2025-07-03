let mockBookings = []

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const getBookings = async () => {
  await delay(300)
  return [...mockBookings]
}

export const getBookingById = async (id) => {
  await delay(200)
  const booking = mockBookings.find(b => b.Id === id)
  if (!booking) {
    throw new Error('Booking not found')
  }
  return { ...booking }
}

export const createBooking = async (bookingData) => {
  await delay(500)
  
  // Validate required fields
  if (!bookingData.clientName || !bookingData.clientEmail || !bookingData.serviceId) {
    throw new Error('Missing required booking information')
  }
  
  // Generate sequential integer ID
  const nextId = mockBookings.length > 0 
    ? Math.max(...mockBookings.map(b => b.Id)) + 1 
    : 1
  
  const newBooking = {
    ...bookingData,
    Id: nextId,
    status: 'pending',
    createdAt: new Date().toISOString()
  }
  
  mockBookings.push(newBooking)
  return { ...newBooking }
}

export const updateBooking = async (id, bookingData) => {
  await delay(400)
  const index = mockBookings.findIndex(b => b.Id === id)
  if (index === -1) {
    throw new Error('Booking not found')
  }
  mockBookings[index] = { ...mockBookings[index], ...bookingData }
  return { ...mockBookings[index] }
}

export const deleteBooking = async (id) => {
  await delay(300)
  const index = mockBookings.findIndex(b => b.Id === id)
  if (index === -1) {
    throw new Error('Booking not found')
  }
  const deletedBooking = mockBookings.splice(index, 1)[0]
  return { ...deletedBooking }
}