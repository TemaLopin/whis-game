import s from './style.module.scss'
import { FC, useContext } from 'react'
import { GameContext } from '../../../../pages/game'
import clsx from 'clsx'
import { Link, useLocation, useNavigate } from 'react-router-dom'

type ButtonCompleteProps = {
  text: string
  link: string
  onClick?: () => void
}

const ButtonComplete: FC<ButtonCompleteProps> = ({ text, link, onClick }) => {
  const { selects } = useContext(GameContext)

  const navigate = useNavigate()
  const { pathname } = useLocation()

  const isFullSelects = selects?.every(({ title }) => title !== '?')

  const handleClick = () => {
    if (onClick) onClick()
    if (link) navigate(link)
  }

  return (
    <button
      onClick={handleClick}
      className={clsx({ [s.button]: true, [s.button_active]: isFullSelects || pathname === '/game/advice' })}
    >
      {pathname === '/game/last-selects' ? 'готово!' : text}
    </button>
  )
}

export default ButtonComplete
