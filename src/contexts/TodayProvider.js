import React, { useState } from 'react'
import TodayContext from './today-context'

const TodayProvider = (props) => {
  const [isToday, setIsToday] = useState(true)

  const handleSetTrue = () => {
    setIsToday(true)
  }
  const handleSetFalse = () => {
    setIsToday(false)
  }

  const todayContext = {
    value: isToday,
    setTrue: handleSetTrue,
    setFalse: handleSetFalse,
  }

  return (
    <TodayContext.Provider value={todayContext}>
      {props.children}
    </TodayContext.Provider>
  )
}

export default TodayProvider
