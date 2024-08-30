import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Image } from 'react-bootstrap'
import s from './style.module.scss'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import ButtonStart from '../button-start'
import { FC, useLayoutEffect, useState } from 'react'

type SliderAnalysisProps = { items: { id: number; image: string; imageAlt: string }[] }

const SliderAnalysis: FC<SliderAnalysisProps> = ({ items }) => {
  const [firstRender, setFirstRender] = useState(true)

  useLayoutEffect(() => {
    setFirstRender(false)
  }, [])

  if (firstRender) return <></>

  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      // allowTouchMove={false}
      autoplay={{
        delay: 0,
        reverseDirection: true,
      }}
      loop={true}
      speed={1000}
      allowSlideNext={false}
      direction={'vertical'}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: true,
      }}
      onSlideChange={(swiper: any) => {
        let nextSlides: any[] = []

        swiper.slides.map((item: any) => {
          if (item.classList.contains('swiper-slide-active')) {
            let sibling = item.nextElementSibling
            while (sibling) {
              nextSlides.push(sibling)
              sibling = sibling.nextElementSibling
            }
          } else {
            item.style.opacity = '1'
          }
        })
        nextSlides.forEach((item) => (item.style.opacity = '0'))
      }}
      breakpoints={{
        520: {
          coverflowEffect: {
            rotate: 0,
            stretch: 295,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          },
        },
      }}
      modules={[Autoplay, EffectCoverflow, Navigation]}
      className={s.swiper}
    >
      {items.map(({ image, imageAlt }, ind: number) => {
        return (
          ind < 16 && (
            <SwiperSlide className={s.slide} key={ind}>
              <div className={s.block_image}>
                <Image src={image} alt={imageAlt} />
              </div>
            </SwiperSlide>
          )
        )
      })}
      <ButtonStart />
    </Swiper>
  )
}

export default SliderAnalysis
