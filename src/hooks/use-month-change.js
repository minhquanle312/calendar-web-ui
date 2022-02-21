import { useState } from 'react'

import { generateCalendar } from '../helpers/helper'

const useMonthChange = (dynamicTotalDays = false) => {
  const currDate = new Date()
  const [focus, setFocus] = useState(undefined)

  const [monthYear, setMonthYear] = useState({
    month: currDate.getMonth() + 1,
    year: currDate.getFullYear(),
  })
  const { month, year } = monthYear

  const { prevMonthDays, currMonth, nextMonthDays } = generateCalendar(
    month,
    year,
    dynamicTotalDays
  )

  const isCurrMonth =
    currDate.getMonth() + 1 === month && currDate.getFullYear() === year

  const handlePrevMonth = () => {
    let newMonth = month - 1
    let newYear = year

    if (month === 1) {
      newMonth = 12
      newYear = year - 1
    }

    setMonthYear({ month: newMonth, year: newYear })
    setFocus(undefined)
  }

  const handleNextMonth = () => {
    let newMonth = month + 1
    let newYear = year

    if (month === 12) {
      newMonth = 1
      newYear = year + 1
    }

    setMonthYear({ month: newMonth, year: newYear })
    setFocus(undefined)
  }

  const handleCurrMonth = () => {
    let newMonth = currDate.getMonth() + 1
    let newYear = currDate.getFullYear()

    setMonthYear({ month: newMonth, year: newYear })
  }

  const handleClickDay = (e) => {
    const dayFocused = +e.target.innerText

    setFocus(dayFocused)
  }

  return {
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
  }
}

export default useMonthChange
