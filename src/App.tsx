import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { renderRoutes } from 'react-router-config'
import { Context } from 'vite-ssr/react'

function App({ router }: Context) {
  console.log('App', router)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {renderRoutes(router.routes)}
    </div>
  )
}

export default App
