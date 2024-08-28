import Header from '../../entity/main-page/components/header'
import DescriptionGame from '../../entity/game/components/description'
import DynamicEcho from '../../shared/ui/dynamic-echo/DynamicEcho'
import ButtonComplete from '../../entity/game/components/button-complete'
import BodyAdvice from '../../entity/game/components/body-advice'
import { Image } from 'react-bootstrap'
import dogImg from '../../shared/assets/images/past-pet/dog.png'
import catImg from '../../shared/assets/images/past-pet/cat.png'
import SliderAdvice from '../../entity/game/components/slider-advice'
import slideImage from '../../shared/assets/images/advice/1.jpeg'
import BottomWrapper from '../../entity/game/components/bottom-wrapper'
import useWindowDimensions from '../../shared/hooks/useWindowDimensions'
import AdviceWrapper from '../../entity/game/components/wrapper/advice'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import useAdvice from '../../shared/api/hooks/useAdvice'

const GameAdvice = () => {
  const { width } = useWindowDimensions()

  const navigate = useNavigate()
  const { type = '' } = useParams()

  const { data = [] } = useAdvice({ type: type === 'dog' ? 'P' : 'W' })

  const handleClick = () => navigate('/game/analysis')

  const descItemDesktop = ['УЗНАЙТЕ, КАКОГО ПИТОМЦА ПОДОБРАЛ искусственный', 'интеллект ПО ВАШИМ ЧЕРТАМ ХАРАКТЕРА']
  const descItem = ['УЗНАЙТЕ, КАКОГО ПИТОМЦА ПОДОБРАЛ', 'искусственный интеллект ПО ВАШИМ', 'ЧЕРТАМ ХАРАКТЕРА']
  const infoDeskDesktop = ['Листайте советы', 'как стать ещё ближе', 'с вашим питомцем']
  const infoDesk = ['Листайте советы как стать', 'ещё ближе с вашим питомцем']

  const slides = data.map((item) => ({
    image: item.photo,
    title: item.description,
  }))

  return (
    <AdviceWrapper>
      <Header />
      <BodyAdvice>
        <div className={'wrapper-top-advice'}>
          {type === 'cat' && width > 996 && (
            <div className={'past-pet-img advice-left'}>
              <Image src={catImg} />
            </div>
          )}
          <DescriptionGame texts={width < 996 ? infoDesk : infoDeskDesktop} />
          <div className={'slider-advice'}>
            <SliderAdvice items={slides} width={width} type={type} />
          </div>
          {type === 'dog' && width > 996 && (
            <div className={'past-pet-img advice-right'}>
              <Image src={dogImg} />
            </div>
          )}
        </div>
        <BottomWrapper>
          <div className={'wrapper-advice'}>
            <DescriptionGame texts={width < 768 ? descItem : descItemDesktop} />
            <DynamicEcho type='button'>
              <ButtonComplete text={'УЗНАТЬ'} onClick={handleClick} />
            </DynamicEcho>
          </div>
        </BottomWrapper>
      </BodyAdvice>
    </AdviceWrapper>
  )
}

export default GameAdvice
