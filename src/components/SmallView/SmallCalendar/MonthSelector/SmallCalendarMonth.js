import React from 'react'

import './SmallCalendarMonth.scss'
import { monthsShort } from './../../../../helpers/helper'

const SmallCalendarMonth = (props) => {
  const currMonth = props.currDate.getMonth()
  const isCurrYear = props.currDate.getFullYear() === props.year

  return (
    <div className={`small-calendar__month ${props.animation}`}>
      {monthsShort.map((item, index) => (
        <div
          key={index}
          className={`${index === currMonth && isCurrYear && 'curr-month'}`}
          onClick={() => props.onParticularMonth(index, props.year)}
        >
          {item}
        </div>
      ))}
    </div>
  )
}

export default SmallCalendarMonth
