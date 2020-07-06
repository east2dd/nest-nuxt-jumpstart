import { createClient } from "@google/maps"

export const getLatLngFromAddress = async (fullAddress: string): Promise<[number, number]> => {
  const client = createClient({
    key: process.env.GOOGLE_MAP_KEY || "",
    language: 'en',
    Promise: Promise
  })
    
  try{
    return await client
      .geocode({ address: fullAddress })
      .asPromise()
      .then(response => {
          const { lat, lng } =  response.json.results[0].geometry.location

          return [lat, lng]
      })
  } catch {
    return [0, 0]
  }
}