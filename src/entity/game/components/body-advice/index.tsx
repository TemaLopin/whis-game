import s from './style.module.scss'
import { ReactNode } from 'react'
const BodyAdvice = ({ children }: { children: ReactNode }) => {
  return <div className={s.body}>{children}</div>
}

export default BodyAdvice
