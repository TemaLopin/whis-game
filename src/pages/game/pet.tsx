import GameWrapper from '../../entity/404/components/wrapper/index'

import Header from '../../entity/main-page/components/header'
import DescriptionGame from '../../entity/game/components/description'
import ButtonStart from '../../entity/game/components/button-start'
import { useEffect, useState } from 'react'

import catImg from '../../shared/assets/images/past-pet/cat.png'
import dogImg from '../../shared/assets/images/past-pet/dog.png'
import mobileImg from '../../shared/assets/images/past-pet/cat_dog_mobile.png'

import { Image } from 'react-bootstrap'

const GamePet = () => {
  const description: string[] = ['ЕСТЬ ЛИ У ВАС кот или собака?']
  const descriptionMobile: string[] = ['ЕСТЬ ЛИ У ВАС', 'кот или собака?']
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResizeWindow)
    return () => {
      window.removeEventListener('resize', handleResizeWindow)
    }
  }, [])

  return (
    <GameWrapper>
      <Header />
      <div className={'past-pet'}>
        <DescriptionGame texts={width > 768 ? description : descriptionMobile} />
        <div className={'past-pet-wrapper'}>
          {width > 768 && (
            <div className={'past-pet-img'}>
              <Image src={catImg} />
            </div>
          )}
          <div className={'game-wrapper'}>
            <ButtonStart title='ДА, КОТ' link='/game/last-selects/cat' />
            <ButtonStart title='ДА, СОБАКА' link='/game/last-selects/dog' />
            <ButtonStart title='НЕТ' link='/game/analysis' />
          </div>
          {width > 768 && (
            <div className={'past-pet-img'}>
              <Image src={dogImg} />
            </div>
          )}
          {width < 769 && (
            <div className={'past-pet-img'}>
              <Image src={mobileImg} />
            </div>
          )}
        </div>
      </div>
    </GameWrapper>
  )
}

export default GamePet
