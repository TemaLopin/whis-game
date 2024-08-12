import { useState } from 'react'
import s from './style.module.scss'
import DynamicEcho from '../../../shared/ui/dynamic-echo/DynamicEcho'

const PetDescription = () => {
  const [pet, setPet] = useState({ name: 'ЭШЛИ' })

  return (
    <div className={s.body}>
      <p className={s.title}>Как помочь {pet.name}?</p>
      <div>
        <p className={s.text}>Узнайте на сайте фонда-партнёра, как подарить питомцу любящий дом</p>
        <DynamicEcho type='button' color='purple' className={s.pulse}>
          <button className={s.button}>узнать</button>
        </DynamicEcho>
      </div>
      <div>
        <p className={s.text}>
          Если вы не можете забрать питомца домой, возьмите его под опеку, подарив внимание и заботу
        </p>

        <DynamicEcho type='button' color='purple' className={s.pulse}>
          <button className={s.button}>
            ВЗЯТЬ <br /> ПОД ОПЕКУ
          </button>
        </DynamicEcho>
      </div>
    </div>
  )
}

export default PetDescription
