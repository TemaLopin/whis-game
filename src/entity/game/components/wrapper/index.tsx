import s from './style.module.scss'
import { ReactNode } from 'react'
import clsx from 'clsx'
import { useLocation } from 'react-router-dom'
import useWindowDimensions from '../../../../shared/hooks/useWindowDimensions'

const GameWrapper = ({ children }: { children: ReactNode }) => {
  const { isMobile, height } = useWindowDimensions()
  const { pathname } = useLocation()

  return (
    <div
      id={'root-game'}
      className={clsx(
        'background',
        s.wrapper,
        (pathname === '/game/go' || pathname === '/game/last-selects/cat' || pathname === '/game/last-selects/dog' || (pathname === '/game/advice' && isMobile)) &&
          s.wrapper_game
      )}
      style={{ height: height > 800 ? '100vh' : `100%` }}
    >
      {children}
    </div>
  )
}

export default GameWrapper
