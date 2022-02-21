import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons'

import './Event.scss'
import { Link } from 'react-router-dom'

const avatar = require('../../assets/img/avatar.jpg')

const Event = (props) => {
  const { event } = props
  const {
    eventUrl,
    title,
    date,
    guestProfile,
    duration,
    isMeeting,
    type,
    meetingUrl,
  } = event

  const startHour = date.getHours()
  const startMinute = date.getMinutes()

  const endTimeNumber = date.getTime() + 1000 * 60 * duration
  const endTime = new Date(endTimeNumber)

  const endHour = endTime.getHours()
  const endMinute = endTime.getMinutes()

  return (
    // <Link to={`/${event.id}`}>
    <Link to={`/${event.id}`} className={`event type-${type}`}>
      <div className="event__header">
        <div className="event-content">
          <div className="event-content__title">{title}</div>
          <div className="event-content__time">
            {startHour > 9 ? startHour : `0${startHour}`}:
            {startMinute > 9 ? startMinute : `0${startMinute}`} -{' '}
            {endHour > 9 ? endHour : `0${endHour}`}:
            {endMinute > 9 ? endMinute : `0${endMinute}`} GMT+7
          </div>
        </div>
        {isMeeting && (
          <div className="event-meeting">
            <a
              href={meetingUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <FontAwesomeIcon icon={faVideo} />
            </a>
          </div>
        )}
      </div>
      {guestProfile?.trim().length > 0 && (
        <div className="event-guest">
          <img src={avatar} alt="Guest's Avatar" />
          <a
            href={guestProfile}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            View Client Profile
          </a>
        </div>
      )}
      {type === 'event' && eventUrl?.trim().length > 0 && (
        <div className="event-link-to-event">
          <a
            href={eventUrl}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            Go to event
          </a>
        </div>
      )}
    </Link>
    // </Link>
  )
}

export default Event
