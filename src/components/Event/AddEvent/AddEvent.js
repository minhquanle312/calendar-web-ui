import React, { useContext } from 'react'
import Backdrop from '../../../UI/Backdrop'
import EventContext from './../../../contexts/event-context'
import useHttp from './../../../hooks/use-http'
import './AddEvent.scss'
import EventForm from './EventForm'

const AddEvent = (props) => {
  const { offSet, onClose } = props
  const { sendRequest: sendEventRequest } = useHttp()
  const eventCtx = useContext(EventContext)

  const handleClick = (e) => {
    e.stopPropagation()
  }

  const createEvent = (event, eventData) => {
    let isMeeting = false
    if (event.enteredMeetingValue) isMeeting = true
    const generatedId = eventData.name
    const createEvent = {
      id: generatedId,
      type: event.enteredTypeValue,
      title: event.enteredTitleValue,
      duration: event.enteredDurationValue,
      description: event.enteredDescriptionValue,
      guestProfile: event.enteredGuestValue,
      meetingUrl: event.enteredMeetingValue,
      eventUrl: event.enteredEventLinkValue,
      isMeeting,
      date: event.enteredDateValue,
    }

    eventCtx.addItem(createEvent)
    onClose()
  }

  const handleEnterEvent = async (event) => {
    let isMeeting = false
    if (event.enteredMeetingValue) isMeeting = true

    const eventGenerated = {
      type: event.enteredTypeValue,
      title: event.enteredTitleValue,
      duration: event.enteredDurationValue,
      description: event.enteredDescriptionValue,
      guestProfile: event.enteredGuestValue,
      meetingUrl: event.enteredMeetingValue,
      eventUrl: event.enteredEventLinkValue,
      isMeeting,
      date: event.enteredDateValue,
    }

    sendEventRequest(
      {
        url: 'https://calendar-web-ui-default-rtdb.asia-southeast1.firebasedatabase.app/events.json',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: { ...eventGenerated },
      },

      createEvent.bind(null, event)
    )
  }

  return (
    <div
      className={`add-event ${
        offSet === 'top-left' || offSet === 'bottom-left'
          ? `${offSet} to-right`
          : `${offSet} to-left`
      }`}
      onClick={handleClick}
    >
      <div className="add-event__header">
        <span onClick={onClose}>&times;</span>
      </div>
      <EventForm
        props={props}
        onEnterEvent={handleEnterEvent}
        onSubmit={onClose}
      />
      <Backdrop onClick={onClose} />
    </div>
  )
}

export default AddEvent
