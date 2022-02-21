import React, { useState } from 'react'
import EventsList from '../Event/EventsList'
import EventViewHeader from './SmallCalendar/EventViewHeader'
import SmallCalendar from './SmallCalendar/SmallCalendar'
import './SmallView.scss'

const SmallView = (props) => {
  const viewModeList = ['Upcoming', 'All', 'Today', 'Past']
  const [viewModeIndex, setViewModeIndex] = useState(0)

  const handleViewChange = () => {
    setViewModeIndex((prevState) => {
      if (prevState === 3) return 0
      return prevState + 1
    })
  }

  return (
    <div className="small-view">
      <SmallCalendar />
      <EventViewHeader
        viewMode={viewModeIndex}
        onViewChange={handleViewChange}
      />
      <EventsList viewMode={viewModeList[viewModeIndex]} />
    </div>
  )
}

export default SmallView
