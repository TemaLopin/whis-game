import Header from '../entity/main-page/components/header'
import DescriptionGame from '../entity/game/components/description'
import BodyAdvice from '../entity/game/components/body-advice'
import slideImage from '../shared/assets/images/analysis.png'
import slideImae from '../shared/assets/images/analysis-2.png'
import SliderAnalysis from '../entity/game/components/slider-analysis'
import GameAnalysisWrapper from '../entity/game/components/wrapper/analysis'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Asya from '../shared/assets/images/pets/Ася.jpg'
import Bruno from '../shared/assets/images/pets/Бруно.jpg'
import Cheesecake from '../shared/assets/images/pets/Ватрушка.jpg'
import Glen from '../shared/assets/images/pets/Глен.jpg'
import Django from '../shared/assets/images/pets/Джанго.jpg'
import Jack from '../shared/assets/images/pets/Джек.jpg'
import Slice from '../shared/assets/images/pets/Долька.jpg'
import Marshmallow from '../shared/assets/images/pets/Зефир.jpg'
import Irma from '../shared/assets/images/pets/Ирма.jpg'
import Kiwi from '../shared/assets/images/pets/Киви.jpg'
import Crete from '../shared/assets/images/pets/Крит.jpg'
import Kutuzov from '../shared/assets/images/pets/Кутузов.jpg'
import LilyValley from '../shared/assets/images/pets/Ландыш.jpg'
import Luke from '../shared/assets/images/pets/Лука.jpg'
import Mosaic from '../shared/assets/images/pets/Мозаика.jpg'
import Morzhik from '../shared/assets/images/pets/Моржик.jpg'
import Nora from '../shared/assets/images/pets/Нора.jpg'
import Ringo from '../shared/assets/images/pets/Ринго.jpg'
import Ron from '../shared/assets/images/pets/Рон.jpg'
import Ryzhik from '../shared/assets/images/pets/Рыжик.jpg'
import Seraphim from '../shared/assets/images/pets/Серафима.jpg'
import SourCream from '../shared/assets/images/pets/Сметан.jpg'
import Tai from '../shared/assets/images/pets/Тай.jpg'
import Tahir from '../shared/assets/images/pets/Тахир.jpg'
import Ursula from '../shared/assets/images/pets/Урсула.jpg'
import Harvey from '../shared/assets/images/pets/Харви.jpg'
import Hummus from '../shared/assets/images/pets/Хумус.jpg'
import Cherry from '../shared/assets/images/pets/Черри.jpg'
import Sheriff from '../shared/assets/images/pets/Шериф.jpg'
import Sherbet from '../shared/assets/images/pets/Щербет.jpg'
import { Image } from 'react-bootstrap'
import DescriptionAnalyze from '../entity/game/components/description-analyze'

const GameAnalysis = () => {
  const navigate = useNavigate()

  const descItem = ['ИСКУССТВЕННЫЙ ИНТЕЛЛЕКТ', 'АНАЛИЗИРУЕТ ОТВЕТЫ']

  const slidesImg = [
    Asya,
    Bruno,
    Cheesecake,
    Glen,
    Django,
    Jack,
    Slice,
    Marshmallow,
    Irma,
    Kiwi,
    Crete,
    Kutuzov,
    LilyValley,
    Luke,
    Mosaic,
    Morzhik,
    Nora,
    Ringo,
    Ron,
    Ryzhik,
    Seraphim,
    SourCream,
    Tai,
    Tahir,
    Ursula,
    Harvey,
    Hummus,
    Cherry,
    Sheriff,
    Sherbet,
  ]

  const slides = slidesImg.map((src, index) => ({
    id: Math.random() * 1000,
    image: src,
    imageAlt: `Слайд ${index + 1}`,
  }))

  useEffect(() => {
    const timeout = setTimeout(() => navigate('/game/result-analysis'), 9000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <GameAnalysisWrapper>
      <Header />
      <BodyAdvice>
        <div className={'wrapper-analysis'}>
          <DescriptionAnalyze items={descItem} />
          <SliderAnalysis items={slides.sort((a, b) => a.id - b.id)} />
        </div>
      </BodyAdvice>
    </GameAnalysisWrapper>
  )
}

export default GameAnalysis
