import Header from '../entity/main-page/components/header'
import BodyAdvice from '../entity/game/components/body-advice'
import DescriptionGame from '../entity/game/components/description'
import GameWrapper from '../entity/game/components/wrapper'
import catRes from '../shared/assets/images/cat-res.jpeg'
import dogRes from '../shared/assets/images/dog-res.jpeg'
import ashlyDog from '../shared/assets/images/ashly.jpeg'
import SliderResultAnalysis from '../entity/game/components/slider-result-analysis'
import DynamicEcho from '../shared/ui/dynamic-echo/DynamicEcho'
import { Link } from 'react-router-dom'
import useWindowDimensions from '../shared/hooks/useWindowDimensions'
import TitleGame from '../entity/game/components/title'
import GameAnalysisWrapper from '../entity/game/components/wrapper/analysis'
import { useState } from 'react'

const GameResultAnalysis = () => {
  const descItem = [
    'Искусственный интеллект проанализировал',
    'ВАШИ ОТВЕТЫ и подобрал БЛИЗКИХ ВАМ',
    'по характеру питомцев из приюта',
  ]
  const descMobile = [
    'Искусственный интеллект',
    'проанализировал ВАШИ ОТВЕТЫ',
    'и подобрал БЛИЗКИХ ВАМ',
    'по характеру питомцев из приюта',
  ]
  const [idSlide, setIdSlide] = useState(0)
  const { width } = useWindowDimensions()
  const slides = [
    {
      id: 1,
      name: 'Василич',
      image: dogRes,
      tags: ['ЛАСКОВАЯ', 'РАДУЕТСЯ ВНИМАНИЮ И ЛАСКЕ', 'прилично ходит на поводке'],
    },
    { id: 2, name: 'ЭШЛИ', image: ashlyDog, tags: ['ЛАСКОВАЯ', 'РАДУЕТСЯ ВНИМАНИЮ И ЛАСКЕ', 'ищет семью'] },
    {
      id: 3,
      name: 'ландыш',
      image: catRes,
      tags: ['нуждается в любви', 'мечтает о заботе', 'прилично ходит на поводке'],
    },
    {
      id: 4,
      name: 'ЭШЛИ',
      image: ashlyDog,
      tags: ['ЛАСКОВАЯ', 'РАДУЕТСЯ ВНИМАНИЮ И ЛАСКЕ', 'прилично ходит на поводке'],
    },
    {
      id: 5,
      name: 'Василич',
      image: dogRes,
      tags: ['ЛАСКОВАЯ', 'РАДУЕТСЯ ВНИМАНИЮ И ЛАСКЕ', 'прилично ходит на поводке'],
    },
    {
      id: 6,
      name: 'ландыш',
      image: catRes,
      tags: ['ЛАСКОВАЯ', 'РАДУЕТСЯ ВНИМАНИЮ И ЛАСКЕ', 'прилично ходит на поводке'],
    },
  ]
  return (
    <GameAnalysisWrapper>
      <Header />
      <BodyAdvice>
        <div className={'wrapper-result-analysis'}>
          {width < 660 && (
            <DynamicEcho type='heart'>
              <TitleGame title={'ВАМ ПОДОШЛО НЕСКОЛЬКО ПИТОМЦЕВ'} />
            </DynamicEcho>
          )}
          <DescriptionGame items={width > 660 ? descItem : descMobile} />
          <SliderResultAnalysis items={slides} setIdSlide={setIdSlide} />
          <DynamicEcho type='button'>
            <Link to={`/game/result/${idSlide}`}>ПОЗНАКОМИТЬСЯ</Link>
          </DynamicEcho>
        </div>
      </BodyAdvice>
    </GameAnalysisWrapper>
  )
}
export default GameResultAnalysis
