import clsx from 'clsx'
import s from './style.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'

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

import { EffectFlip, Virtual, Pagination, Navigation } from 'swiper/modules'
import { Image } from 'react-bootstrap'
import { useRef, useState } from 'react'
const PetSlider = () => {
  const pets = [
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
    <div>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={(value: any) => console.log('!@#$ value', value)}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        virtual
        className={s.pet_swiper}
      >
        {pets.map((item, virtualIndex) => (
          <SwiperSlide className={s.image} key={virtualIndex} virtualIndex={virtualIndex}>
            <img src={item} alt={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default PetSlider
