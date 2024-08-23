import Header from '../entity/main-page/components/header'
import DescriptionGame from '../entity/game/components/description'
import BodyAdvice from '../entity/game/components/body-advice'
import slideImage from '../shared/assets/images/analysis.png'
import slideImae from '../shared/assets/images/analysis-2.png'
import SliderAnalysis from '../entity/game/components/slider-analysis'
import GameAnalysisWrapper from '../entity/game/components/wrapper/analysis'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const GameAnalysis = () => {
  const navigate = useNavigate()

  const descItem = ['ИСКУССТВЕННЫЙ ИНТЕЛЛЕКТ', 'АНАЛИЗИРУЕТ ОТВЕТЫ']

  const slides = [
    { image: slideImage },
    { image: slideImae },
    { image: slideImage },
    { image: slideImae },
    { image: slideImage },
    { image: slideImae },
    { image: slideImage },
    { image: slideImae },
    { image: slideImage },
    { image: slideImae },
    { image: slideImage },
    { image: slideImae },
    { image: slideImage },
    { image: slideImae },
    { image: slideImage },
    { image: slideImae },
    { image: slideImage },
  ]

  useEffect(() => {
    console.log('!@#$ ')
    setTimeout(() => navigate('/game/result/0'), 5000)
  }, [])

  return (
    <GameAnalysisWrapper>
      <Header />
      <BodyAdvice>
        <div className={'wrapper-analysis'}>
          <DescriptionGame items={descItem} />
          <SliderAnalysis items={slides} />
        </div>
      </BodyAdvice>
    </GameAnalysisWrapper>
  )
}

export default GameAnalysis
