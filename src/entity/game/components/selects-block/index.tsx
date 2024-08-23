import s from './style.module.scss'
import SelectCharacteristic from '../select'
import { useContext } from 'react'
import { GameContext } from '../../../../pages/game'

const SelectsBlock = () => {
  const { selects }: any = useContext(GameContext)
  return (
    <div data-animch={3} className={s.wrapper}>
      {selects.map((select: string, ind: number) => {
        return <SelectCharacteristic key={ind} item={select} bg='rgb(98, 25, 109)' selectAsk={true} />
      })}
    </div>
  )
}

export default SelectsBlock
