import React, { useContext } from 'react'
import { monthsLong } from '../../../helpers/helper'
import useMonthChange from './../../../hooks/use-month-change'
import './MainCalendar.scss'
import MainCalendarDays from './MainCalendarDays'
import { daysShort } from './../../../helpers/helper'
import TodayContext from './../../../contexts/today-context'
import useAnimation from './../../../hooks/use-animation'

const MainCalendar = (props) => {
  const {
    month,
    year,
    prevMonthDays,
    currMonth,
    nextMonthDays,
    isCurrMonth,
    handlePrevMonth,
    handleNextMonth,
    handleCurrMonth,
  } = useMonthChange(true)
  const todayCtx = useContext(TodayContext)
  const { addAnimation, animation } = useAnimation(200)

  const handleClickToday = () => {
    todayCtx.setTrue()
    handleCurrMonth()
    addAnimation('to-top', 200)
  }

  return (
    <>
      <div className="main-header">
        <div>
          <button className="btn btn--today" onClick={handleClickToday}>
            Today
          </button>
          <div className="month-picker">
            <span
              className="month-change"
              onClick={() => {
                addAnimation('to-right')
                if (!isCurrMonth) todayCtx.setFalse()
                handlePrevMonth()
              }}
            >
              <pre>{'<'}</pre>
            </span>
            <span
              className="month-change"
              onClick={() => {
                addAnimation('to-left')
                if (!isCurrMonth) todayCtx.setFalse()
                handleNextMonth()
              }}
            >
              <pre>{'>'}</pre>
            </span>
            <span id="main-month-title">
              {monthsLong[month - 1]} {year}
            </span>
          </div>
        </div>
        <button className="btn btn-view-mode">
          Month <pre>{'>'}</pre>
        </button>
      </div>
      <div className="main-week-day">
        {daysShort.map((day, index) => (
          <div key={index}>{day}</div>
        ))}
      </div>
      <MainCalendarDays
        animation={animation}
        month={month}
        year={year}
        isCurrMonth={isCurrMonth}
        prevMonthDays={prevMonthDays}
        currMonth={currMonth}
        nextMonthDays={nextMonthDays}
      />
    </>
  )
}

export default MainCalendar
