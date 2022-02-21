import React, { useContext } from 'react'

import './EventDetail.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrashCan, faX } from '@fortawesome/free-solid-svg-icons'
import { daysLong, monthsLong } from './../../helpers/helper'
import EventContext from './../../contexts/event-context'
import useHttp from '../../hooks/use-http'
const avatar = require('../../assets/img/avatar.jpg')

const EventDetail = (props) => {
  const { offSet, onClose } = props
  const {
    id,
    title,
    date,
    description,
    guestProfile,
    isMeeting,
    meetingUrl,
    type,
    eventUrl,
  } = props.event
  const { sendRequest: deleteEvent } = useHttp()
  const eventCtx = useContext(EventContext)

  const day = daysLong[date.getDay()]
  const month = monthsLong[date.getMonth()]
  const dateValue = date.getDate()

  const preventPropagation = (e) => {
    e.stopPropagation()
  }

  const handleClickDelete = (id) => {
    eventCtx.removeItem(id)
    onClose()

    deleteEvent({
      url: `https://calendar-web-ui-default-rtdb.asia-southeast1.firebasedatabase.app/events/${id}.json`,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  return (
    <div className={`event-detail ${offSet}`} onClick={preventPropagation}>
      <div className="event-detail__header">
        <span>
          <FontAwesomeIcon icon={faPencil} />
        </span>
        <span onClick={() => handleClickDelete(id)}>
          <FontAwesomeIcon icon={faTrashCan} />
        </span>
        <span onClick={onClose}>
          <FontAwesomeIcon icon={faX} />
        </span>
      </div>
      <div className="event-detail__content">
        <div className="event-detail__content-header">
          <h3 className="event-detail__content-title">{title}</h3>
          <div className="event-detail__content-time">
            {day}, {month} {dateValue}
          </div>
        </div>
        {isMeeting && (
          <div className="event-detail__content-meeting">
            <a href={meetingUrl} target="_blank" rel="noreferrer">
              {/* <FontAwesomeIcon icon={faVideo} /> */}
              Join with Google Meet
            </a>
          </div>
        )}
        {guestProfile?.trim().length > 0 && (
          <div className="event-detail__content-guest">
            <img src={avatar} alt="Guest's Avatar" />
            <a href={guestProfile} target="_blank" rel="noreferrer">
              {guestProfile}
            </a>
          </div>
        )}
        {type === 'event' && eventUrl?.trim().length > 0 && (
          <div className="event-detail__content-to-event">
            <a href={eventUrl} target="_blank" rel="noreferrer">
              Go to event
            </a>
          </div>
        )}
        <div className="event-detail__content-description">{description}</div>
      </div>
    </div>
  )
}

export default EventDetail
