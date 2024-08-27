import s from './style.module.scss'
import BodyInfoStart from '../body-info-start'
import DynamicEcho from '../../../../shared/ui/dynamic-echo/DynamicEcho'
import TitleGame from '../title'
import DescriptionGame from '../description'
import ButtonStart from '../button-start'
import { Image } from 'react-bootstrap'
import whisImage from '../../../../shared/assets/images/whiskas-bottom-start.png'
import useWindowDimensions from '../../../../shared/hooks/useWindowDimensions'
import pedigreeImage from '../../../../shared/assets/images/pedigree-bottom.png'
import BottomImage from '../bottom-image'

const BodyStart = () => {
  const descItemDesktop = [
    'Искусственный интеллект поможет',
    'найти питомца, подходящего именно вам,',
    'или стать ещё ближе с вашим любимцем',
  ]
  const descItem: string[] = [
    'Искусственный интеллект',
    'поможет найти питомца,',
    'подходящего именно вам или стать',
    'ещё ближе с вашим любимцем',
  ]
  const { width } = useWindowDimensions()
  return (
    <div className={s.body}>
      {width > 1025 && (
        <div className={s.block_image}>
          <Image src={whisImage} />
        </div>
      )}
      <BodyInfoStart>
        <TitleGame title={'найдите ПОХОЖЕГО по характеру ПИТОМЦА'} />
        <DescriptionGame texts={width > 768 ? descItemDesktop : descItem} />
        <ButtonStart title={width < 768 ? 'Вперёд' : 'Далее'} link='/game/go' />
        {width < 1025 && <BottomImage />}
      </BodyInfoStart>
      {width > 1025 && (
        <div className={s.block_image}>
          <Image src={pedigreeImage} />
        </div>
      )}
    </div>
  )
}

export default BodyStart
