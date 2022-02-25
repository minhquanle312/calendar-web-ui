import React from 'react'

import './SmallCalendarDays.scss'
import { daysShort } from '../../../helpers/helper'

const SmallCalendarDays = (props) => {
  const {
    currDate,
    focus,
    prevMonthDays,
    currMonth,
    nextMonthDays,
    isCurrMonth,
    handleClickDay,
    animation,
  } = props.props

  // console.log(focus, currMonth)

  return (
    <>
      <div className="week-day">
        {daysShort.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      <div className={`small-calendar-days ${animation}`}>
        {prevMonthDays.map((item, index) => {
          return <div key={index}>{item}</div>
        })}
        {currMonth.map((item, index) => {
          return (
            <div
              key={index}
              className={`main-day ${
                focus === item && currDate.getDate() !== item ? 'focus' : ''
              } ${
                currDate.getDate() === item && isCurrMonth ? 'curr-day' : ''
              }`}
              onClick={handleClickDay}
            >
              {item}
            </div>
          )
        })}
        {nextMonthDays.map((item, index) => {
          return <div key={index}>{item}</div>
        })}
      </div>
    </>
  )
}

export default SmallCalendarDays
