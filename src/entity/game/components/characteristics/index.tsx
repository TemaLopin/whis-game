import s from './style.module.scss'
import SelectCharacteristic from '../select'
import { characteristics, lastCharacteristics } from '../../../../pages/game'
import BottomWrapper from '../bottom-wrapper'
import { useLocation } from 'react-router-dom'

const Characteristics = () => {
  const { pathname } = useLocation()
  const data = pathname === '/game/last-selects' ? lastCharacteristics : characteristics
  return (
    <BottomWrapper>
      <div data-animch={10} className={s.body}>
        {data.map((item, ind, arr) => {
          return <SelectCharacteristic item={item} key={ind} />
        })}
      </div>
    </BottomWrapper>
  )
}

export default Characteristics
