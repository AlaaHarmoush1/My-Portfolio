import { Navbar, Welcome, Docs } from '#components/index' 
import React from 'react'

const App = () => {
  return (
    <main>
        <Navbar/>
        <Welcome/>
        <Docs/>
    </main>
  )
}

export default App