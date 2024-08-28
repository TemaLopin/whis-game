import { useState } from 'react'
import s from './style.module.scss'
import DynamicEcho from '../../../shared/ui/dynamic-echo/DynamicEcho'
import clsx from 'clsx'
import { PetInfo } from '../../../pages/game/components/types'

const PetDescription = ({ isDog, data }: { data: PetInfo; isDog: boolean }) => {
  return (
    <div className={s.body}>
      <p className={s.title}>Как помочь {data.nickname}?</p>
      <div>
        <p className={clsx(s.text, isDog ? 'black_color' : 'white_color')}>
          Узнайте на сайте фонда-партнёра, как подарить питомцу любящий дом
        </p>
        <DynamicEcho type='button' color={isDog ? 'purple' : 'orange'} className={s.pulse}>
          <a
            target='_blank'
            href={data.profileLink}
            className={clsx(s.button, isDog ? s.purple_button : s.orange_button)}
          >
            узнать
          </a>
        </DynamicEcho>
      </div>
      <div>
        <p className={clsx(s.text, isDog ? 'black_color' : 'white_color')}>
          Если вы не можете забрать питомца домой, возьмите его под опеку, подарив внимание и заботу
        </p>

        <DynamicEcho type='button' color={isDog ? 'purple' : 'orange'} className={s.pulse}>
          <a
            href='https://fond-nika.ru/opeka_help'
            target='_blank'
            className={clsx(s.button, isDog ? s.purple_button : s.orange_button)}
          >
            ВЗЯТЬ <br /> ПОД ОПЕКУ
          </a>
        </DynamicEcho>
      </div>
    </div>
  )
}

export default PetDescription
