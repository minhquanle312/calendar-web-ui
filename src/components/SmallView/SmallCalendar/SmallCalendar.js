import React, { useContext, useEffect, useState } from 'react'

import './SmallCalendar.scss'
import useMonthChange from './../../../hooks/use-month-change'
import TodayContext from './../../../contexts/today-context'
import useAnimation from './../../../hooks/use-animation'
import SmallCalendarHeader from './SmallCalendarHeader'
import SmallCalendarDays from './SmallCalendarDays'
import SmallCalendarMonth from './MonthSelector/SmallCalendarMonth'

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
    handleParticularMonth,
  } = useMonthChange()
  const todayCtx = useContext(TodayContext)
  const [isYearSelector, setIsYearSelector] = useState(false)

  // console.log(focus, month, year)

  useEffect(() => {
    if (todayCtx.value) handleCurrMonth()
  }, [todayCtx.value])

  const { addAnimation, animation } = useAnimation(200)

  const handleClickMonth = (month, year) => {
    handleParticularMonth(month + 1, year)
    setIsYearSelector(false)
  }

  useEffect(() => {
    if (!isYearSelector) addAnimation('scale-up')
    else addAnimation('scale-down')
  }, [isYearSelector])

  return (
    <>
      <SmallCalendarHeader
        onNextMonth={() => {
          addAnimation('to-left')
          isYearSelector ? handleNextMonth(true) : handleNextMonth()
        }}
        onPrevMonth={() => {
          addAnimation('to-right')
          isYearSelector ? handlePrevMonth(true) : handlePrevMonth()
        }}
        onClickHeader={() => {
          setIsYearSelector((prev) => !prev)
        }}
        props={{
          month,
          year,
          currMonth,
          isCurrMonth,
          todayCtx,
          isYearSelector,
        }}
      />
      {!isYearSelector && (
        <SmallCalendarDays
          props={{
            currDate,
            focus,
            prevMonthDays,
            currMonth,
            nextMonthDays,
            isCurrMonth,
            handleClickDay,
            animation,
          }}
        />
      )}
      {isYearSelector && (
        <SmallCalendarMonth
          currDate={currDate}
          year={year}
          onParticularMonth={handleClickMonth}
          animation={animation}
        />
      )}
    </>
  )
}

export default SmallCalendar
