import s from './style.module.scss'
import { ReactNode } from 'react'

const BottomWrapperAdvice = ({ children }: { children: ReactNode }) => {
  return <div className={s.bg_advice}>{children}</div>
}

export default BottomWrapperAdvice
