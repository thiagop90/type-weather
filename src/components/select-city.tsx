import { useEffect, useState } from 'react'

import { CityProps, getCityByName } from '@/api/get-city-by-name'

import { Input } from './input'

interface SelectCityProps {
  onSelect: (item: CityProps) => void
}

export function SelectCity({ onSelect }: SelectCityProps) {
  const [city, setCity] = useState<CityProps[]>([])
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  async function getCities(name: string) {
    setIsLoading(true)

    const response = await getCityByName(name)

    setCity(response)
    setIsLoading(false)
  }

  useEffect(() => {
    if (search.trim().length === 0) {
      return
    }

    const debounce = setTimeout(() => getCities(search), 500)
    return () => clearInterval(debounce)
  }, [search])

  return (
    <div className="relative w-full">
      <Input
        isLoading={isLoading}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="absolute bottom-[calc(-100%-0.5rem)] z-10 w-full rounded-lg bg-gray-500 shadow-lg transition-colors hover:bg-gray-400">
        {city.length > 0 &&
          city.map((item) => (
            <button
              key={item.id}
              type="button"
              className="w-full px-5 py-4 text-left text-gray-100"
              onClick={() => onSelect(item)}
            >
              {item.name}
            </button>
          ))}
      </div>
    </div>
  )
}
