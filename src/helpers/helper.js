export const daysShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export const daysLong = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

export const monthsLong = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const monthsShort = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

export const generateEventDependOnTime = (eventsData) => {
  const result = []

  eventsData.forEach((event) => {
    const eventMonth = event.date.getMonth()
    const eventYear = event.date.getFullYear()
    const eventDate = event.date.getDate()

    let isAvailable, resultIndex

    result.forEach((item, index) => {
      if (
        item.eventYear === eventYear &&
        item.eventMonth === eventMonth &&
        item.eventDate === eventDate
      ) {
        isAvailable = true
        resultIndex = index
      }
    })

    if (isAvailable) result[resultIndex].events.push(event)
    else result.push({ eventMonth, eventYear, eventDate, events: [event] })
  })

  return result
}

export const isLeapYear = (year) => {
  return (
    (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
    (year % 100 === 0 && year % 400 === 0)
  )
}

export const getFebDays = (year) => {
  return isLeapYear(year) ? 29 : 28
}

export const getDaysOfMonth = (month, year) => {
  const days_of_month = [
    31,
    getFebDays(year),
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ]

  return days_of_month[month - 1]
}

export const generateCalendar = (month, year, dynamicTotalDays = false) => {
  let monthIndex

  const currDate = new Date()
  if (!month) month = currDate.getMonth() + 1
  if (!year) year = currDate.getFullYear()

  monthIndex = month - 1

  const firstDateOfMonth = new Date(year, monthIndex, 1).getDay()

  const currMonth = Array.from(
    { length: getDaysOfMonth(month, year) },
    (_, i) => i + 1
  )

  const prevAndCurDays = getDaysOfMonth(month, year) + firstDateOfMonth
  let totalDays = 42
  if (prevAndCurDays < 35 && dynamicTotalDays) totalDays = 35

  const nextMonthDays = Array.from(
    { length: totalDays - getDaysOfMonth(month, year) - firstDateOfMonth },
    (_, i) => i + 1
  )

  let prevMonth = month - 1
  if (month === 1) prevMonth = 12

  const prevArrayMonth = Array.from(
    { length: getDaysOfMonth(prevMonth, year) },
    (_, i) => i + 1
  )

  let prevMonthDays = prevArrayMonth.slice(-firstDateOfMonth)
  if (firstDateOfMonth === 0) prevMonthDays = []

  return { prevMonthDays, currMonth, nextMonthDays }
}

export const getOffset = (el) => {
  const rect = el.getBoundingClientRect()

  const left = rect.left + window.scrollX
  const top = rect.top + window.scrollY
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight

  const xPortion = left / (viewportWidth + 300)
  const yPortion = top / viewportHeight

  let offSet
  if (xPortion < 0.5 && yPortion < 0.5) {
    offSet = 'top-left'
  } else if (xPortion > 0.5 && yPortion < 0.5) {
    offSet = 'top-right'
  } else if (xPortion < 0.5 && yPortion > 0.5) {
    offSet = 'bottom-left'
  } else if (xPortion > 0.5 && yPortion > 0.5) {
    offSet = 'bottom-right'
  }

  return offSet
}
