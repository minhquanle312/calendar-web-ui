import React, { useContext } from 'react'

import './MainCalendar.scss'
import useMonthChange from './../../../hooks/use-month-change'
import MainCalendarDays from './MainCalendarDays'
import { daysShort } from './../../../helpers/helper'
import TodayContext from './../../../contexts/today-context'
import useAnimation from './../../../hooks/use-animation'
import MainCalendarHeader from './MainCalendarHeader'

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

  const handleClickPrevMonth = () => {
    addAnimation('to-right')
    if (!isCurrMonth) todayCtx.setFalse()
    handlePrevMonth()
  }

  const handleClickNextMonth = () => {
    addAnimation('to-left')
    if (!isCurrMonth) todayCtx.setFalse()
    handleNextMonth()
  }

  return (
    <>
      <MainCalendarHeader
        onPrevMonth={handleClickPrevMonth}
        onNextMonth={handleClickNextMonth}
        onToday={handleClickToday}
        props={{ month, year }}
      />
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
