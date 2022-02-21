import React, { useEffect, useState } from 'react'

import EventContext from './event-context'
import useHttp from './../hooks/use-http'

const EventProvider = (props) => {
  const [events, setEvents] = useState([])

  const { sendRequest: fetchEvents } = useHttp()

  useEffect(() => {
    const transformEvents = (eventObj) => {
      const loadedEvents = []

      for (const eventKey in eventObj) {
        loadedEvents.push({
          id: eventKey,
          ...eventObj[eventKey],
          date: new Date(eventObj[eventKey].date),
        })
      }

      setEvents(loadedEvents)
    }

    fetchEvents(
      {
        url: 'https://calendar-web-ui-default-rtdb.asia-southeast1.firebasedatabase.app/events.json',
      },
      transformEvents
    )
  }, [fetchEvents])

  const handleAddEvent = (item) => {
    setEvents((prevEvents) => prevEvents.concat(item))
  }

  const handleRemoveEvent = (id) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id))
    // setEvents((prevEvents) => prevEvents.splice(0))
  }

  const eventContext = {
    items: events,
    addItem: handleAddEvent,
    removeItem: handleRemoveEvent,
  }

  return (
    <EventContext.Provider value={eventContext}>
      {props.children}
    </EventContext.Provider>
  )
}

export default EventProvider
