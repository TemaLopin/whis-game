import Cesar from '../../../../shared/assets/images/promotion-brands/cesar.png'
import Chappi from '../../../../shared/assets/images/promotion-brands/chappi.png'
import Dreamies from '../../../../shared/assets/images/promotion-brands/dreamies.png'
import KiteKat from '../../../../shared/assets/images/promotion-brands/kitekat.png'
import NatureTable from '../../../../shared/assets/images/promotion-brands/nature-table.png'
import Pedigree from '../../../../shared/assets/images/promotion-brands/pedigree.png'
import PerfectFit from '../../../../shared/assets/images/promotion-brands/perfectfit.png'
import Sheba from '../../../../shared/assets/images/promotion-brands/sheba.png'
import Whiskas from '../../../../shared/assets/images/promotion-brands/whiskas.png'

import s from './style.module.scss'
import { Image } from 'react-bootstrap'
import clsx from 'clsx'
import ym from 'react-yandex-metrika'
import { InView } from 'react-intersection-observer'

const Promotion = () => {
  const brands = [Whiskas, Pedigree, KiteKat, Dreamies, Cesar, PerfectFit, Chappi, NatureTable, Sheba]

  const handleView = () => {
    ym('reachGoal', 'main_brands_view', { main: { brands: { view: 'В акции участвуют' } } })
  }

  return (
    <div className={s.echo}>
      <InView
        triggerOnce
        onChange={(isView) => isView && handleView()}
        className={clsx('container', s.promotion_container)}
      >
        <p>в акции участвуют:</p>
        <div>
          {brands.map((brand, index) => (
            <Image key={index} src={brand} />
          ))}
        </div>
      </InView>
    </div>
  )
}

export default Promotion
