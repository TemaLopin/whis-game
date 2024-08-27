import s from './style.module.scss'
import { useContext } from 'react'
import { GameContext } from '../../../../pages/game'

const QuantityText = () => {
  const { answer, selects } = useContext(GameContext)

  const quantityLove = (length: number) => {
    switch (length) {
      case 4:
        return 'ЕЩЁ Четыре СЕРДЕЧка!'
      case 3:
        return 'ЕЩЁ три СЕРДЕЧка!'
      case 2:
        return 'ЕЩЁ два СЕРДЕЧка!'
      case 1:
        return 'ЕЩЁ одно СЕРДЕЧко!'
      default:
        return ''
    }
  }
  const getLoveLength = () => {
    switch (answer.length) {
      case 0: {
        return quantityLove(selects.length)
      }
      case 1: {
        return quantityLove(selects.length - 1)
      }
      case 2: {
        return quantityLove(selects.length - 2)
      }
      case 3: {
        return quantityLove(selects.length - 3)
      }
    }
  }
  return <p className={s.text}>{getLoveLength()}</p>
}

export default QuantityText
