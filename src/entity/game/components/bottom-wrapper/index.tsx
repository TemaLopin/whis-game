import { Outlet } from 'react-router-dom'
import s from './style.module.scss'
import { ReactNode, useEffect, useMemo, useRef, useState } from 'react'

const BottomWrapper = ({ children }: { children: ReactNode }) => {
  return <div className={s.bg}>{children}</div>
}

export default BottomWrapper
