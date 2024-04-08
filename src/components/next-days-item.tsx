export interface NextDaysItemProps {
  day: string
  icon: string
  weather: string
  min: number
  max: number
}

interface NextDaysItemData {
  data: NextDaysItemProps
}

export function NextDaysItem({ data }: NextDaysItemData) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-2 py-2 sm:gap-3 sm:py-0">
      <h3 className="text-sm font-bold text-gray-200 first-letter:uppercase">
        {data.day}
      </h3>

      <img
        className="h-14 w-14 sm:h-[68px] sm:w-[68px]"
        src={data.icon}
        alt={data.weather}
      />

      <h3 className="hidden truncate text-sm text-gray-200 first-letter:uppercase sm:block xl:text-base">
        {data.weather}
      </h3>

      <div className="flex flex-col font-bold sm:flex-row sm:gap-2">
        <p className="text-gray-100">{data.min}ºc</p>
        <p className="text-gray-400">{data.max}ºc</p>
      </div>
    </div>
  )
}
