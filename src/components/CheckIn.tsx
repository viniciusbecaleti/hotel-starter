import { useState } from 'react'
import { BsCalendar } from 'react-icons/bs'

import 'react-datepicker/dist/react-datepicker.css'
import '@/datepicker.css'

import { Calendar } from './Calendar'

export function CheckIn() {
  const [startDate, setStartDate] = useState<Date | null>(null)

  return (
    <div className="relative flex items-center justify-end h-full">
      <div className="absolute z-10 pr-8">
        <div>
          <BsCalendar className="text-accent text-base" />
        </div>
      </div>

      <Calendar
        className="w-full h-full"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        placeholderText="Check in"
      />
    </div>
  )
}
