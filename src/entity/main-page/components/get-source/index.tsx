import { Image } from 'react-bootstrap'
import s from './style.module.scss'
import BoxWithMoney from '../../../../shared/assets/images/box-with-money.png'

const GetSource = () => {
  return (
    <div className={s.echo}>
      <div className='container'>
        <div className={s.get_source_container}>
          <div className={s.source}>
            <Image className={s.source_img} src={BoxWithMoney} />
            <p className={s.source_value}>2 476 753₽</p>
          </div>
          <div className={s.description}>
            <p>собранные средства</p>
            <span>для передачи в приюты для кошек и собак</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetSource
