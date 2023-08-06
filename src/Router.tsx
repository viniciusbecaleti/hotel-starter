import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayouts'

import { Home } from './pages/Home'
import { RoomDetails } from './pages/RoomDetails'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/room/:id" element={<RoomDetails />} />
      </Route>
    </Routes>
  )
}
