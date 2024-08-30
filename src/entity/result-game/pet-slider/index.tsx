import s from './style.module.scss'
import { ReactComponent as Heart } from '../../../shared/assets/icons/heart.svg'
// import img from '../../../entity/result-game/pet/index.tsx'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

import { Image } from 'react-bootstrap'
import useWindowDimensions from '../../../shared/hooks/useWindowDimensions'
import { PetInfo } from '../../../pages/game/components/types'
import React, { useRef } from 'react'
import ArrowIcon from '../../game/components/slider-advice/arrow-icon'

const PetSlider = ({ data }: { data: PetInfo }) => {
  const { width } = useWindowDimensions()
  const swiperRef = useRef<any>(null)
  const petsImages = (data?.photo ?? '').split(', ').map((item) => process.env.REACT_APP_IMAGE_URL + item)

  const goToNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext()
    }
  }

  const goToPrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev()
    }
  }

  return (
    <div style={{ position: 'relative', display: 'flex' }}>
      <div className={s.quantity}>
        <Heart />
        <p>{data?.name}</p>
      </div>
      <Swiper
        ref={swiperRef}
        centeredSlides={true}
        loop={true}
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
      <button className={s.btn_arrow} onClick={goToPrevSlide}>
        <ArrowIcon />
      </button>
      <button className={s.btn_arrow} onClick={goToNextSlide}>
        <ArrowIcon />
      </button>
    </div>
  )
}

export default PetSlider
