import s from './style.module.scss'
import SelectCharacteristic from '../select'
import { GameContext } from '../../../../pages/game'
import BottomWrapper from '../bottom-wrapper'
import { useContext, useEffect, useRef, useState } from 'react'
import { Image } from 'react-bootstrap'
import catPaw from '../../../../shared/assets/images/cat-paw.png'
import dogPaw from '../../../../shared/assets/images/dog-paw.png'
import clsx from 'clsx'
import { useParams } from 'react-router-dom'
import ym from 'react-yandex-metrika'

const Characteristics = () => {
  const { type } = useParams()

  const [height, setHeight] = useState(0)
  const [firstRender, setFirstRender] = useState(true)

  const root = document.getElementById('root-game')
  const ref = useRef<HTMLDivElement>(null)

  const { isVisible, position, answersData } = useContext(GameContext)
  const { clientWidth = 0 } = root || {}
  const isLeftSidePaw = clientWidth / 2 > position.x

  const handleClick = (index: number) => {
    type
      ? ym('reachGoal', 'gameLastSelects_heart_click', { gameLastSelects: { heart: { click: index + 1 } } })
      : ym('reachGoal', 'gameGo_heart_click', { gameGo: { heart: { click: index + 1 } } })
  }

  const getPosition = () => {
    const paddingTop = clientWidth < 768 ? 30 : 25

    const prefMargin = 30

    const scrollY = -height - paddingTop

    const fromLeft = clientWidth / 2 + position.x + prefMargin - 30
    const fromRight = -clientWidth / 2 - (clientWidth - position.x) - prefMargin + 30
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
          {answersData
            .sort((a, b) => a.category - b.category)
            .sort((a, b) => Number(b.visible) - Number(a.visible))
            .map((answer, ind) => (
              <SelectCharacteristic onClick={() => handleClick(answer.category - 1)} item={answer} key={ind} />
            ))}
        </div>
        <Image
          src={type === 'dog' ? dogPaw : catPaw}
          className={clsx(s.paw)}
          style={{ transform: getPosition(), [isLeftSidePaw ? 'left' : 'right']: '-175px' }}
        />
      </div>
    </BottomWrapper>
  )
}

export default Characteristics
