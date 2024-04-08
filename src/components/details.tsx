import {
  CloudRain,
  Drop,
  SunDim,
  ThermometerSimple,
  Wind,
} from '@phosphor-icons/react'

import { WeatherDetailsResponseProps } from '@/api/get-weather-by-city'

import { WeatherItem } from './weather-item'

interface DetailsProps {
  data: WeatherDetailsResponseProps
}

export function Details({ data }: DetailsProps) {
  return (
    <section className="flex flex-col rounded-xl bg-gray-800 px-4 py-1 sm:px-6 sm:pb-2 sm:pt-7">
      <h2 className="mb-5 hidden text-gray-400 sm:block">
        Detalhes do clima hoje
      </h2>

      <div className="flex flex-1 flex-col divide-y divide-gray-700">
        <WeatherItem
          icon={<ThermometerSimple />}
          title="Sensação térmica"
          value={`${data.feels_like}ºc`}
        />

        <WeatherItem
          icon={<CloudRain />}
          title="Probabilidade de chuva"
          value={`${data.probability}%`}
        />

        <WeatherItem
          icon={<Wind />}
          title="Velocidade do vento"
          value={`${data.wind_speed} km/h`}
        />

        <WeatherItem
          icon={<Drop />}
          title="Umidade do ar"
          value={`${data.humidity}%`}
        />

        <WeatherItem
          icon={<SunDim />}
          title="Índice UV"
          value={data.temp_kf.toString()}
        />
      </div>
    </section>
  )
}
