import { IconContext } from '@phosphor-icons/react'
import { ReactNode } from 'react'

interface WeatherItemProps {
  icon: ReactNode
  title: string
  value: string
}

export function WeatherItem({ icon, title, value }: WeatherItemProps) {
  return (
    <div className="flex flex-1 items-center justify-between py-4">
      <div className="flex items-center gap-3">
        <span className="text-gray-500">
          <IconContext.Provider value={{ size: 32, stroke: '1' }}>
            {icon}
          </IconContext.Provider>
        </span>
        <p className="text-gray-200">{title}</p>
      </div>

      <strong className="text-gray-100">{value}</strong>
    </div>
  )
}
