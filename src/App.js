import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import EventProvider from './contexts/EventProvider'
import Layout from './layout/Layout'

function App() {
  return (
    <EventProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/:eventId" element={<div>event id</div>} />
        </Routes>
      </div>
    </EventProvider>
  )
}

export default App
