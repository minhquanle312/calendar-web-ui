import React, { useState } from 'react'
import SmallEvent from '../SmallEvent'

import './EventQuickView.scss'
import AllEventPerDay from './AllEventPerDay'

const EventQuickView = (props) => {
  const { eventsGenerated, item, month, year } = props.props
  const [showAllEvents, setShowAllEvents] = useState(false)

  const handleClosePopup = () => {
    setShowAllEvents(false)
  }

  const handleShowAllEvents = (e) => {
    e.stopPropagation()
    const dateSelected = +e.target
      .closest('.day-container')
      .querySelector('.main-day').innerText

    eventsGenerated.forEach((event) => {
      if (
        event.eventDate === dateSelected &&
        event.eventMonth + 1 === month &&
        event.eventYear === year
      ) {
        setShowAllEvents(true)
      }
    })
  }

  const SmallEventList = ({ events }) => {
    return events.map((event, index) => {
      return (
        <div key={event.id}>
          {index < 2 && <SmallEvent event={event} title={event.title} />}
          {!showAllEvents && index === 2 && (
            <p onClick={handleShowAllEvents}>{events.length - 2} more</p>
          )}
        </div>
      )
    })
  }

  return (
    <>
      <div className="event-quick-view">
        {eventsGenerated.map((eventsPerDate) => {
          const { eventMonth, eventYear, eventDate, events } = eventsPerDate

          const checkEventDate =
            eventDate === item && eventMonth + 1 === month && eventYear === year

          return (
            checkEventDate && (
              <div key={eventDate}>
                <SmallEventList events={events} />
                {showAllEvents && (
                  <AllEventPerDay
                    onClose={handleClosePopup}
                    props={{
                      month: eventMonth,
                      year: eventYear,
                      date: item,
                      eventsGenerated,
                    }}
                  />
                )}
              </div>
            )
          )
        })}
      </div>
    </>
  )
}

export default EventQuickView
