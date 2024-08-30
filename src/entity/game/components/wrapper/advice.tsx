import s from './style.module.scss'
import { ReactNode } from 'react'
import clsx from 'clsx'
import { useParams } from 'react-router-dom'
import useWindowDimensions from '../../../../shared/hooks/useWindowDimensions'

const AdviceWrapper = ({ children }: { children: ReactNode }) => {
  const { height } = useWindowDimensions()
  const { type } = useParams()
console.log(document.body.scrollHeight, document.documentElement.clientHeight)
  return (
    <div
      className={clsx('background', s.wrapper, type === 'cat' ? s.wrapper_cat : s.wrapper_dog)}
      // style={{ height: document.body.scrollHeight > document.documentElement.clientHeight  ? '100vh' : `100%` }}
    >
      {children}
    </div>
  )
}

export default AdviceWrapper
