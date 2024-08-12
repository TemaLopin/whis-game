import s from './style.module.scss'
import { Image } from 'react-bootstrap'
import robot from '../../../../shared/assets/images/robot-icon.png'

import { Link } from 'react-router-dom'
import DynamicEcho from '../../../../shared/ui/dynamic-echo/DynamicEcho'
const ButtonStart = () => {
  return (
    <div className={s.wrapper}>
      <DynamicEcho type='echo'>
        <Link to='/game/go' className={s.button_start}>
          <Image src={robot} />
          <span className={s.btn_text}>Вперёд</span>
        </Link>
      </DynamicEcho>
    </div>
  )
}

export default ButtonStart
