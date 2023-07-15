import axios from 'axios'

const options = {
  method: 'GET',
  url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
  params: { model: 'corolla' },
  headers: {
    'X-RapidAPI-Key': process.env.CARS_API_KEY,
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
}

export async function fetchCars() {
  try {
    const response = await axios.request(options)

    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50 // Base Rent price per day in dollars
  const mileageFactor = 0.1 // Additional rate per mile driven
  const ageFactor = 0.05 // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor
  const ageRate = (new Date().getFullYear() - year) * ageFactor

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate

  return rentalRatePerDay.toFixed(0)
}
