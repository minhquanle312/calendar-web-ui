import React, { useState } from 'react'

import './SmallEvent.scss'
import EventDetail from './EventDetail'
import { getOffset } from './../../helpers/helper'
import Backdrop from './../../UI/Backdrop'

const SmallEvent = (props) => {
  const { title, type } = props.event

  const [showEventDetail, setShowEventDetail] = useState(false)
  const [offSet, setOffSet] = useState('')

  const handleShowEventDetail = (e) => {
    e.stopPropagation()
    if (showEventDetail) {
      setShowEventDetail(false)
      return
    }
    setShowEventDetail(true)

    const eventClicked = e.target

    setOffSet(getOffset(eventClicked))
  }

  const handleHideEventDetail = () => {
    setShowEventDetail(false)
  }

  return (
    <div className={`small-event type-${type}`} onClick={handleShowEventDetail}>
      <span>{title}</span>
      {showEventDetail && (
        <>
          <EventDetail
            event={props.event}
            offSet={offSet}
            onClose={handleHideEventDetail}
          />
          <Backdrop onClick={handleHideEventDetail} />
        </>
      )}
    </div>
  )
}

export default SmallEvent
