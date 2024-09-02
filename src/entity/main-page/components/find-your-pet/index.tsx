import clsx from 'clsx'
import s from './style.module.scss'

import { ReactComponent as RubleIcon } from '../../../../shared/assets/icons/Ruble.svg'
import { ReactComponent as OneNumberIcon } from '../../../../shared/assets/icons/OneNumber.svg'

import Robot from '../../../../shared/assets/images/robot.png'
import SberThank from '../../../../shared/assets/icons/sber.svg'

import { Image } from 'react-bootstrap'
import DynamicEcho from '../../../../shared/ui/dynamic-echo/DynamicEcho'
import useWindowDimensions from '../../../../shared/hooks/useWindowDimensions'
import { Link } from 'react-router-dom'
import ym from 'react-yandex-metrika'
import { useEffect, useRef, useState } from 'react'
import { InView } from 'react-intersection-observer'

const ModalBlockPulse = () => {
  const ref = useRef<HTMLDivElement>(null)

  const { isMobile } = useWindowDimensions()

  const handleClick = () => {
    ym('reachGoal', 'main_start_click', { main: { start: { click: 'Начать' } } })
  }

  return isMobile ? (
    <div ref={ref} className={s.main_body}>
      <div className={s.robot_img}>
        <DynamicEcho type='circle'>
          <Image src={Robot} />
        </DynamicEcho>
      </div>
      <div className={s.main_text}>
        <p>найдите питомца</p>
        <p>по характеру с помощью</p>
        <span> искусственного интеллекта</span>
      </div>
      <div className={s.sub_text}>
        <p>
          Подберите питомца со схожими чертами характера вместе с <span>искусственным интеллектом </span>
          или узнайте, как сблизиться со своим любимцем
        </p>
      </div>

      <Link onClick={handleClick} to={'/game'} className={s.start_button}>
        НАЧАТЬ
      </Link>
    </div>
  ) : (
    <DynamicEcho>
      <div ref={ref} className={s.main_body}>
        <div className={s.robot_img}>
          <Image src={Robot} />
        </div>
        <div className={s.main_text}>
          <p>найдите питомца</p>
          <p>по характеру с помощью</p>
          <span> искусственного интеллекта</span>
        </div>
        <div className={s.sub_text}>
          <p>Подберите питомца со схожими чертами характера вместе </p>
          <p>
            с <span>искусственным интеллектом </span>
            или узнайте, как сблизиться со своим любимцем
          </p>
        </div>

        <Link to={'/game'} className={s.start_button} onClick={handleClick}>
          НАЧАТЬ
        </Link>
      </div>
    </DynamicEcho>
  )
}

const FindYourPets = () => {
  const handleView = () => {
    ym('reachGoal', 'main_start_view', { main: { start: { view: 'Начать' } } })
  }

  return (
    <div className={clsx('background')}>
      <InView triggerOnce onChange={(isView) => isView && handleView()} className={s.echo_bg}>
        <div className={clsx('container', s.main_block)}>
          <ModalBlockPulse />
        </div>
        <div className='container' id='aktie'>
          <div className={clsx(s.about_block)}>
            <div className={s.about_bye_block}>
              <p className={s.block_title}>Купите</p>
              <div>
                <span>любой продукт </span>
                <span>товаров-участников акции</span>
              </div>
              <div className={s.ruble}>
                <OneNumberIcon />
                <RubleIcon />
              </div>
              <span>с каждой упаковки отправится в приюты для кошек и собак</span>
            </div>

            <div className={s.get_block}>
              <p className={s.block_title}>получите</p>
              <div>
                <span> от суммы покупки</span> <span>10% бонусами</span>
              </div>
              <div className={s.sber}>
                <Image src={SberThank} />
              </div>
              <span>при оплате покупки картой Сбербанка</span>
            </div>
          </div>
        </div>
      </InView>
    </div>
  )
}

export default FindYourPets
