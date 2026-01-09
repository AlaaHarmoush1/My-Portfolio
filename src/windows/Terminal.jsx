import { techStack } from '#constants'
import { Check, Flag } from 'lucide-react'
import WindowWrapper from '../hoc/windowWrapper'
import React from 'react'
import { WindowsControlls } from '#components'

const Terminal = () => {
  return (
    <>
        <div id='window-header'>
            <WindowsControlls target="terminal"/>
            <h2>Teck Stack</h2>
        </div>

        <div className="techstack">
            <p>
                <span className="font-bold">@Alaa % </span>
                show teck stack
            </p>

            <div className='label'>
                <p className='w-32'>Category</p>
                <p>Technologies</p>
            </div>

            <ul className='content'>
                {techStack.map(({ category, items }) => (
                    <li className='flex items-center' key={category}>
                        <Check className='check' size={20} />
                        <h3>{category}</h3>
                        <ul>
                            {items.map((item, index) => (
                                <li key={index}>{item}{index < items.length - 1 ? "," : ''}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>

            <div className="footnote">
                <p>
                    <Check size={20} /> 5 of 5 stacks loaded successfully (100%)
                </p>

                <p className="text-black">
                    <Flag size={15} fill='black' />
                    Render time: 6ms
                </p>
            </div>
        </div>
    </>
  )
}

const TerminalWindow = WindowWrapper(Terminal, 'terminal')

export default TerminalWindow
