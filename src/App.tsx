import { BrowserRouter } from 'react-router-dom'

import { Router } from './Router'

import { RoomsProvider } from './contexts/RoomContext'

export function App() {
  return (
    <RoomsProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </RoomsProvider>
  )
}
