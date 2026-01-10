import { Navbar, Welcome, Docs } from '#components/index' 
import React from 'react'
import gsap from 'gsap';
import { Terminal, Safari, Resume, Finder } from './windows/index.js';
import { Draggable } from 'gsap/Draggable';
gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
        <Navbar/>
        <Welcome/>
        <Docs/>

        <Terminal/>
        <Safari/>
        <Resume/>
        <Finder/>

        
    </main>
  )
}

export default App