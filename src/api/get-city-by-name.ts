import { api } from '@/lib/axios'

export interface CityProps {
  id: string
  name: string
  latitude: number
  longitude: number
}

export interface GetCityByNameResponse {
  id: string
  name: string
  sys: {
    country?: string
  }
  coord: {
    lat: number
    lon: number
  }
}

export async function getCityByName(name: string) {
  try {
    const { data } = await api.get<GetCityByNameResponse>(`/weather?q=${name}`)

    const city = {
      id: data.id,
      name: data.sys.country ? `${data.name}, ${data.sys.country}` : data.name,
      longitude: data.coord.lon,
      latitude: data.coord.lat,
    }

    return [city]
  } catch (err) {
    return []
  }
}
