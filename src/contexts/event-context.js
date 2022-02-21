import React from 'react'

const EventContext = React.createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
})

export default EventContext
