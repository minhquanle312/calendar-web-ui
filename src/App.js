import React, { useContext, useEffect } from 'react'
import './App.scss'
import EventContext from './contexts/event-context'
import useHttp from './hooks/use-http'
import Layout from './layout/Layout'
import EventProvider from './contexts/EventProvider'

function App() {
  // const eventCtx = useContext(EventContext)
  // console.log('eventCTx: ', eventCtx)
  // // const [events, setEvents] = useState([])

  // const { sendRequest: fetchEvents } = useHttp()

  // useEffect(() => {
  //   const transformEvents = (eventObj) => {
  //     const loadedEvents = []

  //     for (const eventKey in eventObj) {
  //       loadedEvents.push({
  //         id: eventKey,
  //         ...eventObj[eventKey],
  //         date: new Date(eventObj[eventKey].date),
  //       })
  //     }

  //     // *test set event context
  //     // setEvents(loadedEvents)
  //     eventCtx.items = [...loadedEvents]
  //   }

  //   fetchEvents(
  //     {
  //       url: 'https://calendar-web-ui-default-rtdb.asia-southeast1.firebasedatabase.app/events.json',
  //     },
  //     transformEvents
  //   )
  // }, [fetchEvents, eventCtx])

  // *test event context (warning when re-render app components)
  // useEffect(() => {
  //   events.forEach((event) => {
  //     eventCtx.items.push(event)
  //     // eventCtx.addItem(event)
  //   }, [])
  // })
  // *test event context

  // const handleAddEvent = (event) => {
  //   setEvents((prevEvents) => prevEvents.concat(event))
  // }

  return (
    <EventProvider>
      <div className="App">
        <Layout />
      </div>
    </EventProvider>
  )
}

export default App
