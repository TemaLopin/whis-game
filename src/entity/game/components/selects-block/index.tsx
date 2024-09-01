import s from './style.module.scss'
import SelectCharacteristic from '../select'
import { useContext, useEffect, useState } from 'react'
import { GameContext } from '../../../../pages/game'
import ym from 'react-yandex-metrika'

const SelectsBlock = () => {
  const [firstRender, setFirstRender] = useState(true)
  const { selects } = useContext(GameContext)

  const handleClick = (index: number) => {
    ym('reachGoal', 'gameLastSelects_heart_click', { gameLastSelects: { heart: { click: index + 1 } } })
  }

  useEffect(() => {
    const timer = setTimeout(() => setFirstRender(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div data-animch={firstRender ? '3' : '1'} className={s.wrapper}>
      {selects.map((select, ind: number) => {
        return (
          <SelectCharacteristic
            onClick={() => handleClick(ind)}
            key={ind}
            item={select}
            bg='rgb(98, 25, 109)'
            selectAsk={true}
          />
        )
      })}
    </div>
  )
}

export default SelectsBlock
