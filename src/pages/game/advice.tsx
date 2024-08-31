import Header from '../../entity/main-page/components/header'
import DynamicEcho from '../../shared/ui/dynamic-echo/DynamicEcho'
import ButtonComplete from '../../entity/game/components/button-complete'
import BodyAdvice from '../../entity/game/components/body-advice'
import { Image } from 'react-bootstrap'
import dogImg from '../../shared/assets/images/past-pet/dog.png'
import catImg from '../../shared/assets/images/past-pet/cat.png'
import SliderAdvice from '../../entity/game/components/slider-advice'
import useWindowDimensions from '../../shared/hooks/useWindowDimensions'
import AdviceWrapper from '../../entity/game/components/wrapper/advice'
import { useNavigate, useParams } from 'react-router-dom'
import useAdvice from '../../shared/api/hooks/useAdvice'
import DescriptionAdvice from '../../entity/game/components/description-advice'
import BottomWrapperAdvice from '../../entity/game/components/bottom-wrapper-advice'
import { useEffect, useState } from 'react'
import { AdviceRecommendationRes, getAdviceRecommendations } from '../../shared/api/endpoints'

const GameAdvice = () => {
  const [data, setData] = useState<AdviceRecommendationRes>([])
  const { width } = useWindowDimensions()

  const navigate = useNavigate()
  const { type = '' } = useParams()

  const answers = JSON.parse(localStorage.getItem('answers') || '{}')

  const handleClick = () => navigate('/game/analysis')

  const descItemDesktop = ['УЗНАЙТЕ, КАКОГО ПИТОМЦА ПОДОБРАЛ искусственный', 'интеллект ПО ВАШИМ ЧЕРТАМ ХАРАКТЕРА']
  const descItem = ['УЗНАЙТЕ, КАКОГО ПИТОМЦА ПОДОБРАЛ', 'искусственный интеллект ПО ВАШИМ', 'ЧЕРТАМ ХАРАКТЕРА']
  const infoDeskDesktop = ['Листайте советы', 'как стать ещё ближе', 'с вашим питомцем']
  const infoDesk = ['Листайте советы как стать', 'ещё ближе с вашим питомцем']

  const slides = data.map((item, index) => ({
    icon: process.env.REACT_APP_IMAGE_URL + item.bgImg,
    image: process.env.REACT_APP_IMAGE_URL + item.photo,
    title: item.description,
  }))

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAdviceRecommendations(type === 'dog' ? 'P' : 'W', answers)
        setData(res)
      } catch (error) {}
    }
    fetchData()
  }, [type])

  return (
    <AdviceWrapper>
      <Header hasBackButton={true} />
      <BodyAdvice>
        <div className={'wrapper-top-advice'}>
          {type === 'cat' && width > 996 && (
            <div className={'past-pet-img advice-left'}>
              <Image src={catImg} />
            </div>
          )}
          <DescriptionAdvice texts={width < 996 ? infoDesk : infoDeskDesktop} />
          <div className={'slider-advice'}>
            <SliderAdvice items={slides} type={type} />
          </div>
          {type === 'dog' && width > 996 && (
            <div className={'past-pet-img advice-right'}>
              <Image src={dogImg} />
            </div>
          )}
        </div>
        <BottomWrapperAdvice>
          <div className={'wrapper-advice'}>
            <DescriptionAdvice texts={width < 768 ? descItem : descItemDesktop} />
            <DynamicEcho type='button'>
              <ButtonComplete text={'УЗНАТЬ'} onClick={handleClick} />
            </DynamicEcho>
          </div>
        </BottomWrapperAdvice>
      </BodyAdvice>
    </AdviceWrapper>
  )
}

export default GameAdvice
