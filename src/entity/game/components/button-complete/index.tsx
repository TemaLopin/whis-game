import s from './style.module.scss'
import { FC } from 'react'
import clsx from 'clsx'

type ButtonCompleteProps = {
  text: string
  onClick: () => void
  disabled?: boolean
}

const ButtonComplete: FC<ButtonCompleteProps> = ({ text, onClick, disabled = false }) => {
  const handleClick = () => !disabled && onClick()

  return (
    <button onClick={handleClick} className={clsx({ [s.button]: true, [s.button_active]: !disabled })}>
      {text}
    </button>
  )
}

export default ButtonComplete
