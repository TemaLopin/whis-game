import Header from '../entity/main-page/components/header'
import DescriptionGame from '../entity/game/components/description'
import BodyAdvice from '../entity/game/components/body-advice'
import slideImage from '../shared/assets/images/analysis.png'
import slideImae from '../shared/assets/images/analysis-2.png'
import SliderAnalysis from '../entity/game/components/slider-analysis'
import GameAnalysisWrapper from '../entity/game/components/wrapper/analysis'

const GameAnalysis = () => {
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
