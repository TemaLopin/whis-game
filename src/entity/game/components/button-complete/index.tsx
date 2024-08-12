import s from './style.module.scss'
import { useContext } from 'react'
import { GameContext } from '../../../../pages/game'
import clsx from 'clsx'
import {Link} from "react-router-dom";

const ButtonComplete = () => {
  const { selects }: any = useContext(GameContext)
  const isFullSelects = selects?.every((select: any) => select?.title !== '?')
  return <Link to={isFullSelects ? '/game/past-pet' : '/game/go'} className={clsx(s.button, isFullSelects && s.button_active)}>ЭТО ПРО МЕНЯ!</Link>
}

export default ButtonComplete
