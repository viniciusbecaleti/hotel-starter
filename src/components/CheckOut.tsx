import { useState } from 'react'
import { BsCalendar } from 'react-icons/bs'

import { Calendar } from './Calendar'

export function CheckOut() {
  const [endDate, setEndDate] = useState<Date | null>(null)

  return (
    <div className="relative flex items-center justify-end h-full">
      <div className="absolute z-10 pr-8">
        <div>
          <BsCalendar className="text-accent text-base" />
        </div>
      </div>

      <Calendar
        className="w-full h-full"
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        placeholderText="Check out"
      />
    </div>
  )
}
