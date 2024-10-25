import { Image } from 'react-bootstrap'
import s from './style.module.scss'

import Auchan from '../../../../shared/assets/images/stores/auchan.png'
import Kuper from '../../../../shared/assets/images/stores/kuper.png'
import Lenta from '../../../../shared/assets/images/stores/lenta.png'
import Magnite from '../../../../shared/assets/images/stores/magnite.png'
import Megamarket from '../../../../shared/assets/images/stores/megamarket.png'
import Metro from '../../../../shared/assets/images/stores/metro.png'
import Perecrestok from '../../../../shared/assets/images/stores/perecrestok.png'
import Pyaterichka from '../../../../shared/assets/images/stores/pyaterichka.png'
import Samokat from '../../../../shared/assets/images/stores/samokat.png'
import clsx from 'clsx'
import { InView } from 'react-intersection-observer'
import ym from 'react-yandex-metrika'
import {Link} from "react-router-dom";

const WhereBye = () => {
  const arrEcommerce = [Kuper, Samokat, Megamarket]
  const arrMagazine = [Magnite, Pyaterichka, Metro, Perecrestok, Lenta]

  const handleView = () => {
    ym('reachGoal', 'main_wtb_view', { main: { wtb: { view: 'Где купить' } } })
  }

  return (
    <div className={s.echo} id='buy'>
      <InView triggerOnce onChange={(isView) => isView && handleView()} className={clsx(s.body, 'container')}>
        <p className={s.main_text}>Где купить?</p>
        <p className={s.sub_text}>Во всех магазинах страны</p>
        <div className={clsx('container', s.brands)}>
          <h3 className={s.title}>В интернет-магазинах</h3>
          {arrEcommerce.map((store, ind) => (
              ind === 0 ? <Link target='_blank' to={`https://kuper.ru/metro/c/tovari-dlya-zhivotnikh/korma-dlya-koshek/b/whiskas?ads_identity.ads_promo_identity.placement_uid=cns3h249u8b43pmgrklg&ads_identity.ads_promo_identity.site_uid=c9qep2jupf8ugo3scn10&sid=1`}><Image className={s.brand_logo} src={store} key={ind}/></Link> :
            <Image className={s.brand_logo} src={store} key={ind}/>
          ))}
        </div>
        <div className={clsx('container', s.brands)}>
          <h3 className={s.title}>В магазинах твоего города</h3>
          {arrMagazine.map((store, ind) => (
            <Image className={s.brand_logo} src={store} key={ind} />
          ))}
        </div>
        <p className={s.info}>* Во всех магазинах, где представлена продукция, участвующая в акции</p>
      </InView>
    </div>
  )
}

export default WhereBye
