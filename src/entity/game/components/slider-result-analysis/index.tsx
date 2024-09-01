import { EffectCoverflow, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Image } from 'react-bootstrap'
import s from './style.module.scss'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import ArrowIcon from '../slider-advice/arrow-icon'
import React, { FC, useRef } from 'react'
import SelectLove from '../select/select-love'
import { SendAnswerGameRes } from '../../../../shared/api/endpoints'
import { InView } from 'react-intersection-observer'
import ym from 'react-yandex-metrika'

type Props = {
  items: (SendAnswerGameRes & { id: number; name: string; image: string; tags: string[] })[]
  setIdSlide: React.Dispatch<React.SetStateAction<number>>
}

const SliderResultAnalysis: FC<Props> = ({ items, setIdSlide }) => {
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

  const handleViewSlide = ({ name, type, id }: { name: string; type: string; id: number }) => {
    ym('reachGoal', 'gameResultAnalysis_pet_view', {
      gameResultAnalysis: { pet: { view: `${id + 1} - ${type} - ${name}` } },
    })
  }

  return (
    <div className={s.container}>
      <Swiper
        ref={swiperRef}
        effect={'coverflow'}
        loop={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 55,
          depth: 631,
          modifier: 1,
          slideShadows: false,
        }}
        onSlideChange={(swiper: any) => setIdSlide(swiper.realIndex)}
        modules={[EffectCoverflow, Navigation]}
        className={s.swiper}
      >
        {items.map(({ image, name, tags, id, type }) => {
          return (
            <SwiperSlide className={s.slide} key={id} id={name}>
              <InView
                triggerOnce
                onChange={(isView) => isView && handleViewSlide({ name, type, id })}
                className={s.block_image}
              >
                <Image src={image} />
                <div className={s.quantity}>
                  <SelectLove />
                  <p>{name}</p>
                </div>
              </InView>

              <div className={s.tags}>
                {tags.map((tag, ind) => {
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
