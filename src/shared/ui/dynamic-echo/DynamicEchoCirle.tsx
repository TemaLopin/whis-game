import { useEffect } from 'react'
import s from './style.module.scss'
import clsx from 'clsx'

const DynamicEcho = ({ children }: { children: JSX.Element }) => {
  useEffect(() => {
    const echo = document.querySelector(s.pulse)
    const child = echo?.children[0] as HTMLElement
    if (child === undefined) return
    // child.classList.add(s.pulse)
    // child.style.zIndex = '5'
  }, [])

  return (
    <div className={clsx(s.pulse, s.square)}>
      <div className={clsx(s.second_pulse, s.square)}>{children}</div>
    </div>
  )
}

export default DynamicEcho
