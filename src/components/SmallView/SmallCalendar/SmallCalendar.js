import React, { useContext, useEffect } from 'react'

import './SmallCalendar.scss'
import useMonthChange from './../../../hooks/use-month-change'
import { monthsShort, daysShort } from '../../../helpers/helper'
import TodayContext from './../../../contexts/today-context'

const SmallCalendar = (props) => {
  const {
    currDate,
    focus,
    month,
    year,
    prevMonthDays,
    currMonth,
    nextMonthDays,
    isCurrMonth,
    handlePrevMonth,
    handleNextMonth,
    handleClickDay,
    handleCurrMonth,
  } = useMonthChange()

  const todayCtx = useContext(TodayContext)

  useEffect(() => {
    if (todayCtx.value) handleCurrMonth()
  }, [todayCtx.value])

  return (
    <>
      <div className="month-picker">
        <span
          className="month-change"
          onClick={() => {
            if (!isCurrMonth) todayCtx.setFalse()
            handlePrevMonth()
          }}
        >
          <pre>{'<'}</pre>
        </span>
        <span id="small-month-title">
          {monthsShort[month - 1]} {year}
        </span>
        <span
          className="month-change"
          onClick={() => {
            if (!isCurrMonth) todayCtx.setFalse()
            handleNextMonth()
          }}
        >
          <pre>{'>'}</pre>
        </span>
      </div>
      <div className="week-day">
        {daysShort.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      <div className="small-calendar-days">
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

export default SmallCalendar
