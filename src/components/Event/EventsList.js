import React, { useContext } from 'react'

import './EventsList.scss'
import Event from './Event'
import EventContext from '../../contexts/event-context'

const EventsList = (props) => {
  const { viewMode } = props
  const currDate = new Date()
  const eventCtx = useContext(EventContext)

  const eventsListOriginal = eventCtx.items

  // *upcoming events
  const eventsList = eventsListOriginal.filter((item) => {
    if (viewMode === 'Upcoming') {
      return item.date.getTime() - currDate.getTime() > 0
    }
    if (viewMode === 'Today') {
      return item.date.getDate() === currDate.getDate()
    }
    if (viewMode === 'Past') {
      return item.date.getTime() - currDate.getTime() < 0
    }
    if (viewMode === 'All') {
      return item
    }
    return item
  })

  return (
    <div className="event-list">
      {eventsList.map((event) => (
        <Event key={event.id} event={event} />
      ))}
    </div>
  )
}

export default EventsList
