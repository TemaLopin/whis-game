import s from './style.module.scss'
import { useContext } from 'react'
import { GameContext } from '../../../../pages/game'
import clsx from 'clsx'

const ButtonComplete = () => {
  const { selects }: any = useContext(GameContext)
  const isFullSelects = selects?.every((select: any) => select?.title !== '?')
  return <button className={clsx(s.button, isFullSelects && s.button_active)}>ЭТО ПРО МЕНЯ!</button>
}

export default ButtonComplete
