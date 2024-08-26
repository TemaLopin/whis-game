import clsx from 'clsx'
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

import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Image } from 'react-bootstrap'
import { useRef, useState } from 'react'
import useWindowDimensions from '../../../shared/hooks/useWindowDimensions'
import SelectLoveIcon from '../../game/components/select/select-love'
const PetSlider = () => {
  const { width } = useWindowDimensions()
  const petsImages = [
    { image: Asya },
    { image: Bruno },
    { image: Cheesecake },
    { image: Glen },
    { image: Django },
    { image: Jack },
    { image: Slice },
    { image: Marshmallow },
    { image: Irma },
    { image: Kiwi },
    { image: Crete },
    { image: Kutuzov },
    { image: LilyValley },
    { image: Luke },
    { image: Mosaic },
    { image: Morzhik },
    { image: Nora },
    { image: Ringo },
    { image: Ron },
    { image: Ryzhik },
    { image: Seraphim },
    { image: SourCream },
    { image: Tai },
    { image: Tahir },
    { image: Ursula },
    { image: Harvey },
    { image: Hummus },
    { image: Cherry },
    { image: Sheriff },
    { image: Sherbet },
  ]

  const [swiperRef, setSwiperRef] = useState(null)
  const appendNumber = useRef(500)
  const prependNumber = useRef(1)
  // Create array with 500 slides

  // const prepend = () => {
  //   setSlides([`Slide ${prependNumber.current - 2}`, `Slide ${prependNumber.current - 1}`, ...slides])
  //   prependNumber.current = prependNumber.current - 2
  //   swiperRef.slideTo(swiperRef.activeIndex + 2, 0)
  // }

  // const append = () => {
  //   setSlides([...slides, 'Slide ' + ++appendNumber.current])
  // }

  // const slideTo = (index: number) => {
  //   swiperRef.slideTo(index - 1, 0)
  // }

  return (
    <div style={{ position: 'relative' }}>
      <div className={s.quantity}>
        <Heart />
        <p>Эшли</p>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={width > 600}
        modules={[Autoplay, Navigation]}
        className={s.pet_swiper}
      >
        {petsImages.map(({ image }, index) => (
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
