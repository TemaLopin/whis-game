import s from './style.module.scss'
import { Image } from 'react-bootstrap'
import robot from '../../../../shared/assets/images/robot-icon.png'

import { useLocation, useNavigate } from 'react-router-dom'
import DynamicEcho from '../../../../shared/ui/dynamic-echo/DynamicEcho'
import clsx from 'clsx'
import { FC } from 'react'

type ButtonStartProps = {
  title?: string
  link?: string
  onClick?: () => void
}

const ButtonStart: FC<ButtonStartProps> = ({ title, link, onClick }) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const handleClick = () => {
    if (onClick) onClick()
    if (!link) return
    navigate(link)
  }

  return (
    <div className={s.wrapper}>
      <DynamicEcho type='echo'>
        <button
          onClick={handleClick}
          className={clsx({
            [s.button_start]: true,
            [s.button_robot]: pathname === '/game/analysis',
            [s.button_advice]: pathname.includes('game/advice/'),
          })}
        >
          {pathname === '/game' && <Image src={robot} />}
          {pathname !== '/game/analysis' ? <span className={s.btn_text}>{title}</span> : <Image src={robot} />}
        </button>
      </DynamicEcho>
    </div>
  )
}

export default ButtonStart
