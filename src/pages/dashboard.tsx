import { Spinner } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'

import { CityProps } from '@/api/get-city-by-name'
import {
  getWeatherByCity,
  GetWeatherByCityResponseProps,
} from '@/api/get-weather-by-city'
import { Details } from '@/components/details'
import { NextDays } from '@/components/next-days'
import { Today } from '@/components/today'

export default function Dashboard() {
  const [data, setData] = useState<GetWeatherByCityResponseProps>(
    {} as GetWeatherByCityResponseProps,
  )
  const [isLoading, setIsLoading] = useState(true)
  const [city, setCity] = useState<CityProps>(
    JSON.parse(localStorage.getItem('@typeweather:city') ?? ''),
  )

  useEffect(() => {
    setIsLoading(true)

    const { latitude, longitude } = city

    getWeatherByCity({ latitude, longitude })
      .then((response) => setData(response))
      .finally(() => setIsLoading(false))
  }, [city])

  if (isLoading) {
    return (
      <div className="flex min-h-dvh items-center justify-center">
        <Spinner className="h-8 w-8 animate-spin text-blue-light" />
      </div>
    )
  }

  return (
    <div className="mx-auto flex max-w-screen-2xl flex-col gap-2 px-2 pb-5 pt-2 sm:gap-6 sm:p-6 lg:grid lg:grid-cols-2">
      <Today
        city={city.name}
        onSearchValue={setCity}
        weather={data.today.weather}
      />
      <Details data={data.today.details} />
      <NextDays data={data.nextDays} />
    </div>
  )
}
