import { Image } from 'react-bootstrap'
import s from './style.module.scss'

import Auchan from '../../../../shared/assets/images/stores/auchan.png'
import Diksi from '../../../../shared/assets/images/stores/diksi.png'
import Kuper from '../../../../shared/assets/images/stores/kuper.png'
import Lenta from '../../../../shared/assets/images/stores/lenta.png'
import Magnite from '../../../../shared/assets/images/stores/magnite.png'
import Megamarket from '../../../../shared/assets/images/stores/megamarket.png'
import Metro from '../../../../shared/assets/images/stores/metro.png'
import Perecrestok from '../../../../shared/assets/images/stores/perecrestok.png'
import Pyaterichka from '../../../../shared/assets/images/stores/pyaterichka.png'
import Samokat from '../../../../shared/assets/images/stores/samokat.png'
import clsx from 'clsx'

const WhereBye = () => {
  const arr = [Magnite, Pyaterichka, Kuper, Auchan, Perecrestok, Lenta, Diksi, Metro, Samokat, Megamarket]

  return (
    <div className={s.echo}>
      <div className={clsx(s.body, 'container')}>
        <p className={s.main_text}>Где купить?</p>
        <p className={s.sub_text}>Покупайте онлайн и в магазинах своего города</p>
        <div className={clsx('container', s.brands)}>
          {arr.map((store) => (
            <Image className={s.brand_logo} src={store} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhereBye
