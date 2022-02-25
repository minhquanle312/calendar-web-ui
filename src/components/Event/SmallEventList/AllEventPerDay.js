import React from 'react'
import { daysShort } from '../../../helpers/helper'

import Backdrop from '../../../UI/Backdrop'
import SmallEvent from '../SmallEvent'
import './AllEventPerDay.scss'

const AllEventPerDay = (props) => {
  const { month, year, date, eventsGenerated } = props.props
  const day = new Date(year, month, date).getDay()
  // console.log(daysShort[day])

  return (
    <div
      className="all-event-popup"
      onClick={(e) => {
        e.stopPropagation()
      }}
    >
      <span className="all-event-popup__close" onClick={props.onClose}>
        &times;
      </span>
      <div className="all-event-popup__day">{daysShort[day]}</div>
      <div className="all-event-popup__date">{date}</div>
      {eventsGenerated.map((eventsPerDate) => {
        const { eventMonth, eventYear, eventDate, events } = eventsPerDate

        const checkEventDate =
          eventDate === date && eventMonth === month && eventYear === year

        return (
          checkEventDate && (
            <div key={eventDate}>
              {events.map((event, index) => {
                return (
                  <SmallEvent key={index} event={event} title={event.title} />
                )
              })}
            </div>
          )
        )
      })}

      <Backdrop onClick={props.onClose} />
    </div>
  )
}

export default AllEventPerDay
