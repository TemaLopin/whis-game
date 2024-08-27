import s from './style.module.scss'
import SelectCharacteristic from '../select'
import { characteristics, GameContext, lastCharacteristics } from '../../../../pages/game'
import BottomWrapper from '../bottom-wrapper'
import { useLocation } from 'react-router-dom'
import { useContext, useEffect, useRef, useState } from 'react'
import { Image } from 'react-bootstrap'
import paw from '../../../../shared/assets/images/paw.png'
import clsx from 'clsx'

const Characteristics = () => {
  const [height, setHeight] = useState(0)
  const [firstRender, setFirstRender] = useState(true)

  const root = document.getElementById('root-game')
  const ref = useRef<HTMLDivElement>(null)

  const { isVisible, position }: any = useContext(GameContext)
  const { clientWidth = 0 } = root || {}
  const isLeftSidePaw = clientWidth / 2 > position.x

  const { pathname } = useLocation()
  const data = pathname === '/game/last-selects' ? lastCharacteristics : characteristics

  const getPosition = () => {
    const paddingTop = clientWidth < 768 ? 30 : 25

    const prefMargin = 30

    const scrollY = -height - paddingTop

    const fromLeft = clientWidth / 2 + position.x + prefMargin
    const fromRight = -clientWidth / 2 - (clientWidth - position.x) - prefMargin
    const scrollX = isLeftSidePaw ? fromLeft : fromRight

    const deg = isLeftSidePaw ? 30 : -30

    const x = `${isVisible ? scrollX : 0}px`
    const y = `${isVisible ? scrollY : -100}px`

    return `translate(${x}, ${y}) rotate(${deg}deg)`
  }

  useEffect(() => {
    if (ref.current) setHeight(ref?.current?.scrollHeight)

    const timer = setTimeout(() => setFirstRender(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <BottomWrapper>
      <div style={{ height }} ref={ref}>
        <div data-animch={firstRender ? '3' : undefined} className={s.body}>
          {data.map((item, ind) => (
            <SelectCharacteristic item={item} key={ind} />
          ))}
        </div>
        <Image
          src={paw}
          className={clsx(s.paw)}
          style={{ transform: getPosition(), [isLeftSidePaw ? 'left' : 'right']: '-175px' }}
        />
      </div>
    </BottomWrapper>
  )
}

export default Characteristics
