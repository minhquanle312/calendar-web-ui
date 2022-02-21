import React, { useState } from 'react'
import TodayProvider from '../contexts/TodayProvider'

import MainView from './../components/MainView/MainView'
import SmallView from './../components/SmallView/SmallView'
import './Layout.scss'

const Layout = (props) => {
  const [isToday, setIsToday] = useState(false)

  const handleToday = (state) => {
    setIsToday(state)
  }

  return (
    <TodayProvider>
      <div className="layout">
        <SmallView />
        <MainView />
      </div>
    </TodayProvider>
  )
}

export default Layout
