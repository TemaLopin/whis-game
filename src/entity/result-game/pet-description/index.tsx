import { useState } from 'react'
import s from './style.module.scss'
import DynamicEcho from '../../../shared/ui/dynamic-echo/DynamicEcho'
import clsx from 'clsx'

const PetDescription = ({ isDog }: { isDog: boolean }) => {
  const [pet, setPet] = useState({ name: 'ЭШЛИ' })

  return (
    <div className={s.body}>
      <p className={s.title}>Как помочь {pet.name}?</p>
      <div>
        <p className={clsx(s.text, isDog ? 'black_color' : 'white_color')}>
          Узнайте на сайте фонда-партнёра, как подарить питомцу любящий дом
        </p>
        <DynamicEcho type='button' color={isDog ? 'purple' : 'orange'} className={s.pulse}>
          <button className={clsx(s.button, isDog ? s.purple_button : s.orange_button)}>узнать</button>
        </DynamicEcho>
      </div>
      <div>
        <p className={clsx(s.text, isDog ? 'black_color' : 'white_color')}>
          Если вы не можете забрать питомца домой, возьмите его под опеку, подарив внимание и заботу
        </p>

        <DynamicEcho type='button' color={isDog ? 'purple' : 'orange'} className={s.pulse}>
          <button className={clsx(s.button, isDog ? s.purple_button : s.orange_button)}>
            ВЗЯТЬ <br /> ПОД ОПЕКУ
          </button>
        </DynamicEcho>
      </div>
    </div>
  )
}

export default PetDescription
