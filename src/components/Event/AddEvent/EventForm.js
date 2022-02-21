import React, { useState, useRef } from 'react'
import { monthsLong } from '../../../helpers/helper'

import './EventForm.scss'

const EventForm = (props) => {
  const { day, month, year } = props.props
  const [eventType, setEventType] = useState('appointment')

  const eventTypeValue = eventType
  const eventTitleRef = useRef()
  const eventHourRef = useRef()
  const eventMinuteRef = useRef()
  const eventDurationRef = useRef()
  const eventDescriptionRef = useRef()
  const eventGuestRef = useRef()
  const eventMeetingRef = useRef()
  const eventEventLinkRef = useRef()

  const currDate = new Date()
  let startHour = currDate.getHours()
  let startMinute = currDate.getMinutes()
  if (startMinute < 30) startMinute = 30
  if (startMinute > 30) {
    startMinute = 0
    startHour += 1
  }

  const handleTypeAppointment = (e) => {
    e.preventDefault()
    setEventType('appointment')
  }
  const handleTypeEvent = (e) => {
    e.preventDefault()
    setEventType('event')
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    // const enteredValue = taskInputRef.current.value;
    const enteredTypeValue = eventTypeValue
    const enteredTitleValue = eventTitleRef.current?.value
    const enteredHourValue = eventHourRef.current?.value || startHour
    const enteredMinuteValue = eventMinuteRef.current?.value || startMinute
    const enteredDurationValue = eventDurationRef.current?.value
    const enteredDescriptionValue = eventDescriptionRef.current?.value
    const enteredGuestValue = eventGuestRef.current?.value
    const enteredMeetingValue = eventMeetingRef.current?.value
    const enteredEventLinkValue = eventEventLinkRef.current?.value
    const enteredDateValue = new Date(
      year,
      month - 1,
      day,
      enteredHourValue,
      enteredMinuteValue
    )

    props.onEnterEvent({
      enteredTypeValue,
      enteredTitleValue,
      enteredDurationValue,
      enteredDescriptionValue,
      enteredGuestValue,
      enteredMeetingValue,
      enteredEventLinkValue,
      enteredDateValue,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="event-form">
      <input
        className="add-event__title"
        type="text"
        placeholder="Add title"
        ref={eventTitleRef}
      />
      <div className="add-event__type">
        <button
          className={`add-event-btn btn--type ${
            eventType === 'appointment' ? 'active' : ''
          }`}
          onClick={handleTypeAppointment}
        >
          Appointment
        </button>
        <button
          className={`add-event-btn btn--type ${
            eventType === 'event' ? 'active' : ''
          }`}
          onClick={handleTypeEvent}
        >
          Event
        </button>
      </div>
      <div className="add-event__time">
        <span>
          {monthsLong[month - 1]} {day} {year}
        </span>
        <div>
          <input
            className="add-event__time--hour"
            type="number"
            min="0"
            max="24"
            step="1"
            placeholder={startHour}
            ref={eventHourRef}
          />
          :
          <input
            className="add-event__time--minute"
            type="number"
            min="0"
            max="60"
            step="1"
            placeholder={startMinute}
            ref={eventMinuteRef}
          />
          GMT+7
        </div>
      </div>
      <input
        className="add-event__duration"
        type="number"
        min="5"
        max="600"
        step="5"
        placeholder="Add duration (minutes)"
        ref={eventDurationRef}
      />
      <input
        className="add-event__description"
        type="text"
        placeholder="Add description"
        ref={eventDescriptionRef}
      />
      {eventType === 'appointment' && (
        <>
          {' '}
          <input
            className="add-event__guest"
            type="text"
            placeholder="Add guest (link to profile)"
            ref={eventGuestRef}
          />
          <input
            className="add-event__meeting-link"
            type="text"
            placeholder="Add google meet link"
            ref={eventMeetingRef}
          />
        </>
      )}
      {eventType === 'event' && (
        <input
          className="add-event__event-link"
          type="text"
          placeholder="Add event link"
          ref={eventEventLinkRef}
        />
      )}
      <button type="submit" className="add-event-btn btn--save">
        Save
      </button>
    </form>
  )
}

export default EventForm
