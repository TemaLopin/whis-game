import Header from '../../entity/main-page/components/header'
import BodyAdvice from '../../entity/game/components/body-advice'
import DescriptionGame from '../../entity/game/components/description'
import SliderResultAnalysis from '../../entity/game/components/slider-result-analysis'
import DynamicEcho from '../../shared/ui/dynamic-echo/DynamicEcho'
import { Link } from 'react-router-dom'
import useWindowDimensions from '../../shared/hooks/useWindowDimensions'
import TitleGame from '../../entity/game/components/title'
import GameAnalysisWrapper from '../../entity/game/components/wrapper/analysis'
import { useState } from 'react'
import { SendAnswerGameRes } from '../../shared/api/endpoints'
import petsImages from './components/pets-images'

const GameResultAnalysis = () => {
  const data = JSON.parse(localStorage.getItem('pets') || '[]') as SendAnswerGameRes

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

  const slides = data.map((item, id) => ({
    id,
    name: item.nickname,
    image: petsImages[id],
    tags: item.tagsPreview.split(','),
  }))

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
          <DescriptionGame texts={width > 660 ? descItem : descMobile} />
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
