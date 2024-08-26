import {Autoplay, EffectCoverflow, Navigation} from 'swiper/modules'
import React, {useRef} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Image} from 'react-bootstrap'
import s from './style.module.scss'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import MusicIcon from './music-icon'
import ArrowIcon from './arrow-icon'
import SelectLove from '../select/select-love'
import DynamicEcho from '../../../../shared/ui/dynamic-echo/DynamicEcho'
import clsx from "clsx";

const SliderAdvice = ({items, width, search}: any) => {
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
        <Swiper
            ref={swiperRef}
            effect={'coverflow'}
            grabCursor={true}
            loop={true}
            // autoplay={{
            //     delay: 3000,
            //     disableOnInteraction: false,
            // }}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 0,
                stretch: 205,
                depth: 390,
                modifier: 1,
                slideShadows: false,
            }}
            modules={[EffectCoverflow, Navigation, Autoplay]}
            className={s.swiper}

        >
            {items.map(({title, image}: any, ind: number) => {
                return (
                    <SwiperSlide className={clsx(s.slide, search === '?animal=cat' && s.slide_cat)} key={ind}>
                        <div className={s.wrapper}>
                            <div className={s.quantity}>
                                <SelectLove/>
                                <p>{`0${++ind}`}</p>
                            </div>
                            <h4 className={s.slide_text}>{title}</h4>
                            {search !== '?animal=cat' && <MusicIcon/>}
                            <DynamicEcho type='small_heart'>
                                <div className={s.block_image}>
                                    <Image src={image} className={s.masked_image}/>
                                    {/* <Image src={test} /> */}
                                </div>
                            </DynamicEcho>
                        </div>
                    </SwiperSlide>
                )
            })}
            {width > 996 && (
                <div className={s.btn_wrapper}>
                    <button className={s.btn_arrow} onClick={goToPrevSlide}>
                        <ArrowIcon/>
                    </button>
                    <button className={s.btn_arrow} onClick={goToNextSlide}>
                        <ArrowIcon/>
                    </button>
                </div>
            )}
        </Swiper>
    )
}

export default SliderAdvice
