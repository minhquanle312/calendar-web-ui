import React from 'react'

import './EventViewHeader.scss'

const EventViewHeader = (props) => {
  const viewModeList = ['Upcoming', 'All', 'Today', 'Past']
  const buttonList = ['all', 'today', 'past', 'upcoming']
  const { viewMode, onViewChange } = props

  return (
    <div className="event-view-header">
      <div className="event-view-header__block">
        <h3 className="event-view-header__title">
          {viewModeList[viewMode]} Events
        </h3>
        <button className="event-view-header__button" onClick={onViewChange}>
          View {buttonList[viewMode]}
        </button>
      </div>
      <div className="event-view-header__time">Today, 19 Feb</div>
    </div>
  )
}

export default EventViewHeader
