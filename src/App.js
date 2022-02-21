import React from 'react'
import './App.scss'
import EventProvider from './contexts/EventProvider'
import Layout from './layout/Layout'

function App() {
  return (
    <EventProvider>
      <div className="App">
        <Layout />
      </div>
    </EventProvider>
  )
}

export default App
