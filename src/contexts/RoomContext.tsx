import { ReactNode, createContext, useState } from 'react'
import { roomData, RoomDataType } from '@/data'

interface RoomsContextProps {
  rooms: RoomDataType[]
  getRooms: (maxPeople: number) => void
}

interface RoomsProviderProps {
  children: ReactNode
}

export const RoomsContext = createContext({} as RoomsContextProps)

export function RoomsProvider({ children }: RoomsProviderProps) {
  const [rooms, setRooms] = useState(roomData)

  function getRooms(maxPeople: number) {
    const filtedRoomData = roomData.filter(
      (room) => room.maxPerson >= maxPeople,
    )

    setRooms(filtedRoomData)
  }

  return (
    <RoomsContext.Provider value={{ rooms, getRooms }}>
      {children}
    </RoomsContext.Provider>
  )
}
