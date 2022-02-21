import React from 'react'

const TodayContext = React.createContext({
  value: true,
  setTrue: () => {},
  setFalse: () => {},
})

export default TodayContext
