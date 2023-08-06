import { FormEvent, useContext, useState } from 'react'

import { AdultsDropdown } from './AdultsDropdown'
import { CheckIn } from './CheckIn'
import { CheckOut } from './CheckOut'
import { KidsDropdown } from './KidsDropdown'
import { RoomsContext } from '@/contexts/RoomContext'

export function BookForm() {
  const [adults, setAdults] = useState(1)
  const [kids, setKids] = useState(0)

  const { getRooms } = useContext(RoomsContext)

  const totalPeopleSelected = adults + kids

  const checkNowButtonDisabled = !totalPeopleSelected

  function selectQuantityAdults(quantity: number) {
    setAdults(quantity)
  }

  function selectQuantityKids(quantity: number) {
    setKids(quantity)
  }

  function handleCheckNow(event: FormEvent) {
    event.preventDefault()
    getRooms(totalPeopleSelected)
  }

  return (
    <form className="h-[300px] w-full lg:h-[70px]">
      <div className="flex flex-col w-full h-full lg:flex-row">
        <div className="flex-1 lg:border-r">
          <CheckIn />
        </div>
        <div className="flex-1 lg:border-r">
          <CheckOut />
        </div>
        <div className="flex-1 lg:border-r">
          <AdultsDropdown
            selectedQuantity={adults}
            onSelectQuantityAdults={selectQuantityAdults}
          />
        </div>
        <div className="flex-1">
          <KidsDropdown
            selectedQuantity={kids}
            onSelectQuantityKids={selectQuantityKids}
          />
        </div>
        <div className="flex-1 bg-white">
          <button
            type="submit"
            disabled={checkNowButtonDisabled}
            className="w-full h-full btn btn-primary"
            onClick={handleCheckNow}
          >
            Check Now
          </button>
        </div>
      </div>
    </form>
  )
}
