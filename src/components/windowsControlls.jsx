import { useWindowStore } from '#store/window'
import React from 'react'

const WindowsControlls = ({ target }) => {
    const { closeWindow } = useWindowStore()
  return (
    <div className='' id='window-controls'>
      <div className='close' onClick={() => closeWindow(target)}/>
      <div className="minimize" />
      <div className="maximize" />
    </div>
  )
}

export default WindowsControlls
