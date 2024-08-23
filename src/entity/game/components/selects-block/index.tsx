import s from './style.module.scss'
import SelectCharacteristic from '../select'
import { useContext, useEffect, useState } from 'react'
import { GameContext } from '../../../../pages/game'

const SelectsBlock = () => {
  const [firstRender, setFirstRender] = useState(true)

  const { selects }: any = useContext(GameContext)

  useEffect(() => {
    setTimeout(() => setFirstRender(false), 2000)
  }, [])

  return (
    <div data-animch={firstRender ? '3' : '1'} className={s.wrapper}>
      {selects.map((select: string, ind: number) => {
        return <SelectCharacteristic key={ind} item={select} bg='rgb(98, 25, 109)' selectAsk={true} />
      })}
    </div>
  )
}

export default SelectsBlock
