import React from 'react'

import './MainCalendarHeader.scss'
import { monthsLong } from '../../../helpers/helper'

const MainCalendarHeader = (props) => {
  const { month, year } = props.props

  return (
    <div className="main-header">
      <div>
        <button className="btn btn--today" onClick={props.onToday}>
          Today
        </button>
        <div className="month-picker">
          <span className="month-change" onClick={props.onPrevMonth}>
            <pre>{'<'}</pre>
          </span>
          <span className="month-change" onClick={props.onNextMonth}>
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
  )
}

export default MainCalendarHeader
