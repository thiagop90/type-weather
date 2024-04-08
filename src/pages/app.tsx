import { useNavigate } from 'react-router-dom'

import { CityProps } from '@/api/get-city-by-name'
import { SelectCity } from '@/components/select-city'

export default function App() {
  const navigate = useNavigate()

  function handleSelected(city: CityProps) {
    localStorage.setItem('@typeweather:city', JSON.stringify(city))
    navigate('/dashboard')
  }

  return (
    <div className="flex min-h-dvh flex-col items-center bg-[url('/background.png')] bg-cover bg-center px-8 pt-12">
      <img src="/logo-large.svg" alt="Logo" />

      <main className="flex w-full max-w-[504px] flex-1 flex-col items-center justify-center">
        <h1 className="mb-1 text-xl font-bold text-gray-100 sm:mb-3 sm:text-[32px]">
          Boas vindas ao <span className="text-blue-light">TypeWeather</span>
        </h1>
        <span className="mb-8 text-sm text-gray-200 sm:mb-14 sm:text-xl">
          Escolha um local para ver a previsão do tempo
        </span>

        <SelectCity onSelect={handleSelected} />
      </main>
    </div>
  )
}
