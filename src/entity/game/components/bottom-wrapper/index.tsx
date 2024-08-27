import s from './style.module.scss'
import { ReactNode } from 'react'

const BottomWrapper = ({ children }: { children: ReactNode }) => {
  return <div className={s.bg}>{children}</div>
}

export default BottomWrapper
