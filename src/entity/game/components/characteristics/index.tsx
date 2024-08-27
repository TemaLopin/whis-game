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
  const root = document.getElementById('root-game')

  const [height, setHeight] = useState(0)
  const [firstRender, setFirstRender] = useState(true)

  const ref = useRef<HTMLDivElement>(null)

  const { pathname } = useLocation()
  const data = pathname === '/game/last-selects' ? lastCharacteristics : characteristics
  const { isVisible, position }: any = useContext(GameContext)

  const getPosition = () => {
    const { clientWidth = 0 } = root || {}

    const paddingTop = clientWidth < 768 ? 30 : 25

    const prefMargin = 30

    const scrollY = -height - paddingTop
    const scrollX = clientWidth / 2 + position.x + prefMargin

    const isLeftSide = clientWidth / 2 > position.x

    const deg = '30deg'
    const rotate = `rotate(${deg})`

    const x = `${isVisible ? scrollX : 0}px`
    const y = `${isVisible ? scrollY : -100}px`

    return `translate(${x}, ${y}) ${rotate}`
  }

  useEffect(() => {
    if (ref.current) setHeight(ref?.current?.scrollHeight)

    const timer = setTimeout(() => setFirstRender(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <BottomWrapper>
      <div style={{ height }} ref={ref}>
        <div data-animch={firstRender ? '3' : '1'} className={s.body}>
          {data.map((item, ind) => (
            <SelectCharacteristic item={item} key={ind} />
          ))}
        </div>
        <Image src={paw} className={clsx(s.paw)} style={{ transform: getPosition() }} />
      </div>
    </BottomWrapper>
  )
}

export default Characteristics
