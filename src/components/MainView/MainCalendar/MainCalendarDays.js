import React, { useContext, useState } from 'react'
import { generateEventDependOnTime, getOffset } from '../../../helpers/helper'
import EventQuickView from '../../Event/SmallEventList/EventQuickView'
import EventContext from './../../../contexts/event-context'
import AddEvent from './../../Event/AddEvent/AddEvent'
import './MainCalendarDays.scss'

const MainCalendarDays = (props) => {
  const [offSet, setOffSet] = useState('')
  const [showAddEvent, setShowAddEvent] = useState(false)
  const [dayPicked, setDayPick] = useState(null)

  const currDate = new Date()
  const {
    month,
    year,
    isCurrMonth,
    prevMonthDays,
    currMonth,
    nextMonthDays,
    animation,
  } = props

  const handleShowAddEvent = (e, item) => {
    if (showAddEvent) {
      setShowAddEvent(false)
      return
    }
    const dayContainer = e.target
    const date = +e.target.closest('.day-container').querySelector('.day')
      .innerText
    setDayPick(date)

    setOffSet(getOffset(dayContainer))
    setShowAddEvent(true)
  }

  const handleHideAddEvent = () => {
    setShowAddEvent(false)
  }

  const eventCtx = useContext(EventContext)
  const eventsGenerated = generateEventDependOnTime(eventCtx.items)

  return (
    <div className={`main-calendar-days ${animation}`}>
      {prevMonthDays.map((item, index) => {
        return (
          <div key={index} className="day-container">
            <div className="day">{item}</div>
          </div>
        )
      })}
      {currMonth.map((item, index) => {
        return (
          <div
            key={index}
            className="day-container"
            onClick={(e) => handleShowAddEvent(e, item)}
          >
            <div
              className={`day main-day ${
                currDate.getDate() === item && isCurrMonth ? 'curr-day' : ''
              }`}
            >
              {item}
            </div>
            <EventQuickView props={{ eventsGenerated, item, month, year }} />
            {showAddEvent && item === dayPicked && (
              <AddEvent
                onClose={handleHideAddEvent}
                month={month}
                day={item}
                year={year}
                offSet={offSet}
              />
            )}
          </div>
        )
      })}
      {nextMonthDays.map((item, index) => {
        return (
          <div key={index} className="day-container">
            <div className="day">{item}</div>
          </div>
        )
      })}
    </div>
  )
}

export default MainCalendarDays
