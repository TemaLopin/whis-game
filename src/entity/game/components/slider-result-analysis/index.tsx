import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Image } from 'react-bootstrap'
import s from './style.module.scss'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import ArrowIcon from '../slider-advice/arrow-icon'
import React, { useRef } from 'react'
import SelectLove from '../select/select-love'

const SliderResultAnalysis = ({ items, setIdSlide }: any) => {
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

  return (
    <div className={s.container}>
      <Swiper
        ref={swiperRef}
        effect={'coverflow'}
        loop={true}
        centeredSlides={true}
        slidesPerView={2}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 55,
          depth: 631,
          modifier: 1,
          slideShadows: false,
        }}
        onSlideChange={(swiper: any) => setIdSlide(swiper.realIndex)}
        modules={[EffectCoverflow, Autoplay, Navigation]}
        className={s.swiper}
      >
        {items.map(({ image, name, tags, id }: any) => {
          return (
            <SwiperSlide className={s.slide} key={id} id={id}>
              <div className={s.block_image}>
                <Image src={image} />
                <div className={s.quantity}>
                  <SelectLove />
                  <p>{name}</p>
                </div>
              </div>

              <div className={s.tags}>
                {tags.map((tag: any, ind: number) => {
                  return (
                    ind <= 2 && (
                      <div className={s.tag} key={ind}>
                        {tag}
                      </div>
                    )
                  )
                })}
              </div>
            </SwiperSlide>
          )
        })}
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

export default SliderResultAnalysis
