import { Image } from 'react-bootstrap'
import s from './style.module.scss'
import BoxWithMoney from '../../../../shared/assets/images/box-with-money.png'
import useSoursCount from '../../../../shared/api/hooks/useSoursCount'
import { useMemo } from 'react'

const GetSource = () => {
  const { data } = useSoursCount()
  const { amount = 0 } = data

  const stringCount = useMemo(() => amount.toLocaleString('ru-RU'), [amount])

  return (
    <div className={s.echo}>
      <div className='container'>
        <div className={s.get_source_container} id={'helped'}>
          <div className={s.source}>
            <Image className={s.source_img} src={BoxWithMoney} />
            <p className={s.source_value}>{stringCount}₽</p>
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
