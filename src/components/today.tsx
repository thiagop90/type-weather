import 'dayjs/locale/pt-br'

import dayjs from 'dayjs'

import { CityProps } from '@/api/get-city-by-name'
import { WeatherResponseProps } from '@/api/get-weather-by-city'
import { isDayTime } from '@/utils/is-day-time'

import { SelectCity } from './select-city'

interface TodayProps {
  city: string
  weather: WeatherResponseProps
  onSearchValue: (value: CityProps) => void
}

export function Today({ city, weather, onSearchValue }: TodayProps) {
  const today = dayjs(new Date())
    .locale('pt-br')
    .format('dddd, DD [de] MMMM [de] YYYY')
  const isDay = isDayTime()

  const bgImg = isDay ? weather.details.bg_day : weather.details.bg_night
  const icon = isDay ? weather.details.icon_day : weather.details.icon_night

  return (
    <section className="flex max-h-[700px] flex-col gap-3 rounded-xl bg-gray-800 p-3 lg:sticky lg:top-6 lg:row-span-2 lg:max-h-[calc(100dvh-48px)]">
      <div className="flex gap-2">
        <a
          href="/"
          className="flex h-14 w-14 flex-none items-center justify-center rounded-lg bg-gray-600"
        >
          <img className="h-10 w-10" src="/logo.svg" alt="Logo" />
        </a>

        <SelectCity onSelect={onSearchValue} />
      </div>

      <div
        className="relative flex aspect-square h-full w-full flex-col justify-between rounded-lg bg-cover bg-center bg-no-repeat p-5 sm:p-8"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <header className="space-y-0.5 text-gray-100">
          <h3 className="text-lg font-bold sm:text-xl">{city}</h3>
          <p className="text-sm first-letter:uppercase sm:text-base">{today}</p>
        </header>

        <footer className="flex w-fit flex-col gap-2 p-1 sm:gap-3">
          <h1 className="text-5xl font-extrabold sm:text-6xl xl:text-[96px]">
            {weather.temp}ºc
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
            <p className="font-bold sm:text-xl">
              {weather.temp_min}ºc / {weather.temp_max}ºc
            </p>
            <span className="hidden h-2 w-2 rounded-full bg-gray-400 sm:block" />
            <p className="text-sm first-letter:uppercase sm:text-base xl:text-xl">
              {weather.description}
            </p>
          </div>
        </footer>

        <img
          className="absolute bottom-0 right-0 h-40 w-40 sm:h-52 sm:w-52 xl:h-60 xl:w-60"
          src={icon}
          alt="Tempo"
        />
      </div>
    </section>
  )
}
