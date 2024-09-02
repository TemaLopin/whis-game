import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules'
import { FC, useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Image } from 'react-bootstrap'
import s from './style.module.scss'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'

import ArrowIcon from './arrow-icon'
import SelectLove from '../select/select-love'
import clsx from 'clsx'
import useWindowDimensions from '../../../../shared/hooks/useWindowDimensions'

import ym from 'react-yandex-metrika'

type SliderAdviceProps = {
  items: { _id: string; title: string; image: string; icon: string }[]
  type?: string
}

const SliderAdvice: FC<SliderAdviceProps> = ({ items, type }) => {
  const [idSlide, setIdSlide] = useState(-1)
  const { height, width } = useWindowDimensions()
  const swiperRef = useRef<any>(null)

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

  const handleViewSlide = (id: string) => {
    ym('reachGoal', 'gameAdvice_advice_view', { gameAdvice: { advice: { view: id } } })
  }

  useEffect(() => {
    const curElem = items[idSlide]
    if (!curElem) return

    handleViewSlide(curElem?._id)
  }, [idSlide, items])

  return (
    <>
      <Swiper
        ref={swiperRef}
        effect={'coverflow'}
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 205,
          depth: 390,
          modifier: 1,
          slideShadows: false,
        }}
        onSlideChange={(swiper: any) => setIdSlide(swiper?.realIndex)}
        modules={[EffectCoverflow, Navigation, Autoplay]}
        className={s.swiper}
      >
        {items.map(({ title, image, icon, _id }, ind: number) => {
          return (
            <SwiperSlide className={clsx(s.slide, type === 'cat' && s.slide_cat)} key={ind} data-index={ind}>
              <div className={s.wrapper}>
                <div className={s.quantity}>
                  <SelectLove />
                  <p>{`0${++ind}`}</p>
                </div>
                <h4 className={s.slide_text}>{title}</h4>
                {height > 650 && <Image style={{ height: 100, objectFit: 'contain' }} src={icon} />}

                <div className={clsx(s.block_image, type === 'cat' ? s.purple_heart : s.yellow_heart)}>
                  <Image src={image} className={s.masked_image} />
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      {width > 600 && (
        <div className={s.btn_wrapper}>
          <button className={s.btn_arrow} onClick={goToPrevSlide}>
            <ArrowIcon />
          </button>
          <button className={s.btn_arrow} onClick={goToNextSlide}>
            <ArrowIcon />
          </button>
        </div>
      )}
    </>
  )
}

export default SliderAdvice
