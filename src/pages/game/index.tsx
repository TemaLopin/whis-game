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
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import useWindowDimensions from '../../shared/hooks/useWindowDimensions'
import useSendGameAnswer from '../../shared/api/hooks/useSendGameAnswer'
import { getGameText } from './components/utils'
import { Answer, AnswerData, GameContextT } from './components/types'

type SendAnswer = { [key: string]: string }
export const GameContext = createContext<GameContextT>({} as GameContextT)

const types: { [key: string]: string } = {
  LOW: '1',
  MEDIUM: '2',
  HIGH: '3',
}

export const characteristics = [
  { title: 'ЛЮБЛЮ ПОЛЕЖАТЬ', category: 1, key: 'activity', level: 'LOW', visible: true },
  { title: 'ЖИВУ УМЕРЕННО АКТИВНО', category: 1, key: 'activity', level: 'MEDIUM', visible: true },
  { title: 'ВСЕГДА В ДВИЖЕНИИ', category: 1, key: 'activity', level: 'HIGH', visible: true },
  { title: 'ПРЕДПОЧИТАЮ УЕДИНЕНИЕ', category: 2, key: 'socialization', level: 'LOW', visible: true },
  { title: 'ОБЩАЮСЬ В МЕРУ', category: 2, key: 'socialization', level: 'MEDIUM', visible: true },
  { title: 'ЛЮБЛЮ ОБЩЕНИЕ', category: 2, key: 'socialization', level: 'HIGH', visible: true },
  { title: 'Спокойный', category: 3, key: 'curiosity', level: 'LOW', visible: true },
  { title: 'Адаптивный', category: 3, key: 'curiosity', level: 'MEDIUM', visible: true },
  { title: 'Экспрессивный', category: 3, key: 'curiosity', level: 'HIGH', visible: true },
  { title: 'ценю привычное', category: 4, key: 'temperament', level: 'LOW', visible: true },
  { title: 'интересуюсь новым', category: 4, key: 'temperament', level: 'MEDIUM', visible: true },
  { title: 'радуюсь открытиям', category: 4, key: 'temperament', level: 'HIGH', visible: true },
]

export const lastCharacteristics = [
  { title: 'Любит полежать', category: 1, key: 'activity', level: 'LOW', visible: true },
  { title: 'Живёт умеренно активно', category: 1, key: 'activity', level: 'MEDIUM', visible: true },
  { title: 'Всегда в движении', category: 1, key: 'activity', level: 'HIGH', visible: true },
  { title: 'Предпочитает уединение', category: 2, key: 'socialization', level: 'LOW', visible: true },
  { title: 'Общается в меру', category: 2, key: 'socialization', level: 'MEDIUM', visible: true },
  { title: 'Любит  общение', category: 2, key: 'socialization', level: 'HIGH', visible: true },
  { title: 'Реагирует не сразу', category: 3, key: 'trainability', level: 'LOW', visible: true },
  { title: 'Понимает, что к чему', category: 3, key: 'trainability', level: 'MEDIUM', visible: true },
  { title: 'Схватывает с полуслова', category: 3, key: 'trainability', level: 'HIGH', visible: true },
]

const Game = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { type } = useParams()

  const { width } = useWindowDimensions()

  const isMainGame = !pathname.includes('/game/last-selects/')
  const { descItem, descItemDesktop, selectsGame } = getGameText(isMainGame)

  const [answer, setAnswer] = useState<AnswerData[]>([])

  const [answersData, setAnswersData] = useState<AnswerData[]>(isMainGame ? characteristics : lastCharacteristics)

  const { mutate: handleSendAnswer } = useSendGameAnswer()

  const [indSelect, setIndSelect] = useState(2)
  const [selects, setSelects] = useState<Answer[]>(selectsGame)

  const [categorySelect, setCategorySelect] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0, offsetWidth: 0 })

  const [isVisible, setIsVisible] = useState(false)
  const isFullSelects = selects?.every(({ title }) => title !== '?')

  const handleClick = () => {
    const answers = answer.reduce((acc: SendAnswer, { key = '', level = '' }) => {
      acc[key] = isMainGame ? level : types[level]
      return acc
    }, {})

    navigate(isMainGame ? '/game/past-pet' : `/game/advice/${type}`)

    if (isMainGame) handleSendAnswer(answers)
    else localStorage.setItem('answers', JSON.stringify(answers))
  }

  useEffect(() => {
    const findNullSelect = selects.find(({ title }) => title === '?')
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
    answersData,
    setAnswersData,
  }

  return (
    <GameWrapper>
      <Header hasBackButton={true} />
      <GameContext.Provider value={context}>
        <BodyInfoStart>
          <DescriptionGame texts={width < 768 ? descItem : descItemDesktop} />
          <SelectsBlock />
          <QuantityText />
          <DynamicEcho type='button'>
            <ButtonComplete
              text={isMainGame ? 'ЭТО ПРО МЕНЯ!' : 'ГОТОВО!'}
              onClick={handleClick}
              disabled={!isFullSelects}
            />
          </DynamicEcho>
          <Characteristics />
        </BodyInfoStart>
      </GameContext.Provider>
    </GameWrapper>
  )
}

export default Game
