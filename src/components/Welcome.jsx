import React, { useRef } from 'react'
import { renderText } from '#services/RenderText';
import { setupTextHover } from '#services/SetupTextHover';
import { FONT_WEIGHTS } from '#constants';
import { useGSAP } from '@gsap/react';


const Welcome = () => {


  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    setupTextHover(titleRef.current, 'title');
    setupTextHover(subtitleRef.current, 'subtitle')
  }, [])

  return (
    <section id='welcome'>
      <p ref={subtitleRef}>
        {renderText("Hey I'm Alaa Harmoush! Welcome to my", 'text-3xl font-georama', 100)}
      </p>
      <h1 ref={titleRef} className='mt-7'>
        {renderText("portfolio", 'text-9xl italic font-georama')}
      </h1>

      <div className="small-screen">
        <p>This portfolio is designed for desktop/tablet screens only</p>
      </div>
    </section>
  )
}

export default Welcome
