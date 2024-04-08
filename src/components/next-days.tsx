import { NextDaysItem, NextDaysItemProps } from './next-days-item'

interface NextDaysProps {
  data: NextDaysItemProps[]
}

export function NextDays({ data }: NextDaysProps) {
  return (
    <section className="flex flex-col rounded-xl bg-gray-800 p-3 sm:p-6 sm:pt-7">
      <h2 className="mb-5 hidden text-gray-400 sm:block">
        Previsão para 5 dias
      </h2>

      <div className="flex flex-1 justify-center">
        {data.map((item, index) => (
          <NextDaysItem
            key={item.day}
            data={index === 0 ? { ...item, day: 'Amanhã' } : item}
          />
        ))}
      </div>
    </section>
  )
}
