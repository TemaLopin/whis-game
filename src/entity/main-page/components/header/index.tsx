import Whiskas from '../../../../shared/assets/images/whiskas-logo.png'
import Pedigree from '../../../../shared/assets/images/pedigree-logo.png'

import s from './style.module.scss'
import { Image } from 'react-bootstrap'
import Navigation from '../navigation'
import { useParams } from 'react-router-dom'

/* eslint-disable  */

const Header = () => {
  const pathUrl = useParams()

  return (
    <div className={s.container}>
      {/* <div className={s.link_container}>
        <a href='javascript:void(0);' className={s.back_link}>
          Назад
        </a>
      </div> */}
      <div className={s.header}>
        <Image src={Whiskas} />
        {!pathUrl['*'] && <Navigation />}
        <Image src={Pedigree} />
      </div>
    </div>
  )
}

export default Header
