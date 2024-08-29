import Header from '../../entity/main-page/components/header'
import BodyAdvice from '../../entity/game/components/body-advice'
import SliderAnalysis from '../../entity/game/components/slider-analysis'
import GameAnalysisWrapper from '../../entity/game/components/wrapper/analysis'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import DescriptionAnalyze from '../../entity/game/components/description-analyze'
import { getPetsImages } from './components/utils'

const GameAnalysis = () => {
  const navigate = useNavigate()

  const descItem = ['ИСКУССТВЕННЫЙ ИНТЕЛЛЕКТ', 'АНАЛИЗИРУЕТ ОТВЕТЫ']

  const slidesImg = getPetsImages()
  const slides = slidesImg.map((src, index) => ({
    id: Math.random() * 1000,
    image: src,
    imageAlt: `Слайд ${index + 1}`,
  }))

  useEffect(() => {
    const timeout = setTimeout(() => navigate('/game/result-analysis'), 4000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <GameAnalysisWrapper>
      <Header />
      <BodyAdvice>
        <div className={'wrapper-analysis'}>
          <DescriptionAnalyze texts={descItem} />
          <SliderAnalysis items={slides.sort((a, b) => a.id - b.id)} />
        </div>
      </BodyAdvice>
    </GameAnalysisWrapper>
  )
}

export default GameAnalysis
