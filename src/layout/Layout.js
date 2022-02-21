import React from 'react'
import TodayProvider from '../contexts/TodayProvider'

import MainView from './../components/MainView/MainView'
import SmallView from './../components/SmallView/SmallView'
import './Layout.scss'

const Layout = () => {
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
