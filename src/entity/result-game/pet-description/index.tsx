import { useState } from 'react'
import s from './style.module.scss'
import DynamicEcho from '../../../shared/ui/dynamic-echo/DynamicEcho'
import clsx from 'clsx'
import { PetInfo } from '../../../pages/game/components/types'
import ym from 'react-yandex-metrika'

const PetDescription = ({ isDog, data }: { data: PetInfo; isDog: boolean }) => {
  const handleKnow = () => {
    const { type, nickname } = data
    ym('reachGoal', 'gameResult_learn_click', {
      gameResult: { learn: { click: `${type} - ${nickname}` } },
    })
  }

  const handleTakePet = () => {
    const { type, nickname } = data
    ym('reachGoal', 'gameResult_take_click', {
      gameResult: { take: { click: `${type} - ${nickname}` } },
    })
  }

  return (
    <div className={s.body}>
      <p className={s.title}>как помочь животному?</p>
      <div>
        <p className={clsx(s.text, isDog ? 'black_color' : 'white_color')}>
          Узнайте на сайте фонда-партнёра, как подарить питомцу любящий дом
        </p>
        <DynamicEcho type='button' color={isDog ? 'purple' : 'orange'} className={s.pulse}>
          <a
            target='_blank'
            href={data.profileLink}
            className={clsx(s.button, isDog ? s.purple_button : s.orange_button)}
            onClick={handleKnow}
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
            href={data?.custodyLink}
            target='_blank'
            className={clsx(s.button, isDog ? s.purple_button : s.orange_button)}
            onClick={handleTakePet}
          >
            ВЗЯТЬ <br /> ПОД ОПЕКУ
          </a>
        </DynamicEcho>
      </div>
    </div>
  )
}

export default PetDescription
