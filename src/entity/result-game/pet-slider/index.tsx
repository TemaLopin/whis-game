import s from './style.module.scss'
import { ReactComponent as Heart } from '../../../shared/assets/icons/heart.svg'
// import img from '../../../entity/result-game/pet/index.tsx'
import Asya from '../../../shared/assets/images/pets/Ася.jpg'
import Bruno from '../../../shared/assets/images/pets/Бруно.jpg'
import Cheesecake from '../../../shared/assets/images/pets/Ватрушка.jpg'
import Glen from '../../../shared/assets/images/pets/Глен.jpg'
import Django from '../../../shared/assets/images/pets/Джанго.jpg'
import Jack from '../../../shared/assets/images/pets/Джек.jpg'
import Slice from '../../../shared/assets/images/pets/Долька.jpg'
import Marshmallow from '../../../shared/assets/images/pets/Зефир.jpg'
import Irma from '../../../shared/assets/images/pets/Ирма.jpg'
import Kiwi from '../../../shared/assets/images/pets/Киви.jpg'
import Crete from '../../../shared/assets/images/pets/Крит.jpg'
import Kutuzov from '../../../shared/assets/images/pets/Кутузов.jpg'
import LilyValley from '../../../shared/assets/images/pets/Ландыш.jpg'
import Luke from '../../../shared/assets/images/pets/Лука.jpg'
import Mosaic from '../../../shared/assets/images/pets/Мозаика.jpg'
import Morzhik from '../../../shared/assets/images/pets/Моржик.jpg'
import Nora from '../../../shared/assets/images/pets/Нора.jpg'
import Ringo from '../../../shared/assets/images/pets/Ринго.jpg'
import Ron from '../../../shared/assets/images/pets/Рон.jpg'
import Ryzhik from '../../../shared/assets/images/pets/Рыжик.jpg'
import Seraphim from '../../../shared/assets/images/pets/Серафима.jpg'
import SourCream from '../../../shared/assets/images/pets/Сметан.jpg'
import Tai from '../../../shared/assets/images/pets/Тай.jpg'
import Tahir from '../../../shared/assets/images/pets/Тахир.jpg'
import Ursula from '../../../shared/assets/images/pets/Урсула.jpg'
import Harvey from '../../../shared/assets/images/pets/Харви.jpg'
import Hummus from '../../../shared/assets/images/pets/Хумус.jpg'
import Cherry from '../../../shared/assets/images/pets/Черри.jpg'
import Sheriff from '../../../shared/assets/images/pets/Шериф.jpg'
import Sherbet from '../../../shared/assets/images/pets/Щербет.jpg'

import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Image } from 'react-bootstrap'
import useWindowDimensions from '../../../shared/hooks/useWindowDimensions'
import { PetInfo } from '../../../pages/game/components/types'
const PetSlider = ({ data }: { data: PetInfo }) => {
  const { width } = useWindowDimensions()

  const petsImages = data?.photo.split(', ').map((item) => process.env.REACT_APP_IMAGE_URL + item)

  return (
    <div style={{ position: 'relative', display: 'flex' }}>
      <div className={s.quantity}>
        <Heart />
        <p>{data?.name}</p>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={width > 600}
        modules={[Autoplay, Navigation]}
        className={s.pet_swiper}
      >
        {petsImages.map((image, index) => (
          <SwiperSlide className={s.slider} key={index}>
            <div className={s.image_container}>
              <Image className={s.image} src={image} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default PetSlider
