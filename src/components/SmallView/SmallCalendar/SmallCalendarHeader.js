import React from 'react'
import { monthsShort } from '../../../helpers/helper'
import './SmallCalendarHeader.scss'

const SmallCalendarHeader = (props) => {
  const { month, year, isCurrMonth, todayCtx, isYearSelector } = props.props

  const handleClickPrevMonth = () => {
    if (!isCurrMonth) todayCtx.setFalse()
    props.onPrevMonth()
  }

  const handleClickNextMonth = () => {
    if (!isCurrMonth) todayCtx.setFalse()
    props.onNextMonth()
  }

  const handleClickHeader = () => {
    props.onClickHeader()
  }

  return (
    <div className="month-picker">
      <span className="month-change" onClick={handleClickPrevMonth}>
        <pre>{'<'}</pre>
      </span>
      <span id="small-month-title" onClick={handleClickHeader}>
        {!isYearSelector && `${monthsShort[month - 1]} ${year}`}
        {isYearSelector && `${year}`}
      </span>
      <span className="month-change" onClick={handleClickNextMonth}>
        <pre>{'>'}</pre>
      </span>
    </div>
  )
}

export default SmallCalendarHeader
