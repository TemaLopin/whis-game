import GameWrapper from '../../entity/game/components/wrapper'
import Header from '../../entity/main-page/components/header'
import BodyInfoStart from '../../entity/game/components/body-info-start'
import DescriptionGame from '../../entity/game/components/description'
import SelectsBlock from '../../entity/game/components/selects-block'
import QuantityText from '../../entity/game/components/quantity-text'
import ButtonComplete from '../../entity/game/components/button-complete'
import Characteristics from '../../entity/game/components/characteristics'
import { createContext, useEffect, useState } from 'react'

import DynamicEcho from '../../shared/ui/dynamic-echo/DynamicEcho'
import { useLocation } from 'react-router-dom'
import useWindowDimensions from '../../shared/hooks/useWindowDimensions'
import useSendGameAnswer from '../../shared/api/hooks/useSendGameAnswer'
import { getGameText } from './components/utils'
import { Answer, GameContextT } from './components/types'

export const GameContext = createContext<GameContextT>({} as GameContextT)

export const characteristics = [
  { title: 'ЛЮБЛЮ ПОЛЕЖАТЬ', category: 1 },
  { title: 'ЖИВУ УМЕРЕННО АКТИВНО', category: 1 },
  { title: 'ВСЕГДА В ДВИЖЕНИИ', category: 1 },
  { title: 'ПРЕДПОЧИТАЮ УЕДИНЕНИЕ', category: 2 },
  { title: 'ОБЩАЮСЬ В МЕРУ', category: 2 },
  { title: 'ЛЮБЛЮ ОБЩЕНИЕ', category: 2 },
  { title: 'Спокойный', category: 3 },
  { title: 'Адаптивный', category: 3 },
  { title: 'Экспрессивный', category: 3 },
  { title: 'ценю привычное', category: 4 },
  { title: 'интересуюсь новым', category: 4 },
  { title: 'радуюсь открытиям', category: 4 },
]

export const lastCharacteristics = [
  { title: 'ЛЮБЛЮ ПОЛЕЖАТЬ', category: 1 },
  { title: 'ЖИВУ УМЕРЕННО АКТИВНО', category: 1 },
  { title: 'ВСЕГДА В ДВИЖЕНИИ', category: 1 },
  { title: 'ПРЕДПОЧИТАЮ УЕДИНЕНИЕ', category: 2 },
  { title: 'ОБЩАЮСЬ В МЕРУ', category: 2 },
  { title: 'ЛЮБЛЮ ОБЩЕНИЕ', category: 2 },
  { title: 'Реагирует не сразу', category: 3 },
  { title: 'Понимает что к чему', category: 3 },
  { title: 'схватываю с полуслова', category: 3 },
]

const Game = () => {
  const { pathname, search } = useLocation()
  const { width } = useWindowDimensions()

  const isUserGame = pathname !== '/game/last-selects'
  const { descItem, descItemDesktop, selectsGame } = getGameText(isUserGame)

  const link = isUserGame ? '/game/past-pet' : `/game/advice${search}`

  const [answer, setAnswer] = useState<Answer[]>([])

  const [indSelect, setIndSelect] = useState(2)
  const [selects, setSelects] = useState<Answer[]>(selectsGame)

  const [categorySelect, setCategorySelect] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0, offsetWidth: 0 })

  const [isVisible, setIsVisible] = useState(false)

  const handleSaveAnswer = () => {
    // sendAnswer(answer)
  }

  useEffect(() => {
    const findNullSelect = selects.find(({ title }) => title == '?')
    setCategorySelect(findNullSelect?.category ?? 1)
  }, [answer])

  const context = {
    setAnswer,
    answer,
    selects,
    setSelects,
    indSelect,
    setIndSelect,
    categorySelect,
    setCategorySelect,
    position,
    setPosition,
    isVisible,
    setIsVisible,
  }

  return (
    <GameWrapper>
      <Header />
      <GameContext.Provider value={context}>
        <BodyInfoStart>
          <DescriptionGame texts={width < 768 ? descItem : descItemDesktop} />
          <SelectsBlock />
          <QuantityText />
          <DynamicEcho type='button'>
            <ButtonComplete text='ЭТО ПРО МЕНЯ!' link={link} />
          </DynamicEcho>
          <Characteristics />
        </BodyInfoStart>
      </GameContext.Provider>
    </GameWrapper>
  )
}

export default Game
