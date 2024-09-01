import Whiskas from '../../../../shared/assets/images/whiskas-logo.png'
import Pedigree from '../../../../shared/assets/images/pedigree-logo.png'

import s from './style.module.scss'
import { Image } from 'react-bootstrap'
import Navigation from '../navigation'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ym from 'react-yandex-metrika'

/* eslint-disable  */

const Header = ({ hasBackButton = false }: { hasBackButton?: boolean }) => {
  const navigate = useNavigate()
  const pathUrl = useParams()

  const handleClickMetric = (name: string) => {
    ym('reachGoal', 'header_button_click', { header: { button: { click: name } } })
  }

  return (
    <div className={s.container}>
      {hasBackButton && (
        <div onClick={() => navigate(-1)} className={s.link_container}>
          <button className={s.back_link}>Назад</button>
        </div>
      )}
      <div className={s.header}>
        <Link onClick={() => handleClickMetric('logo')} to={'/'}>
          <Image src={Whiskas} />
        </Link>
        {!pathUrl['*'] && <Navigation />}
        <Link onClick={() => handleClickMetric('logo')} to={'/'}>
          <Image src={Pedigree} />
        </Link>
      </div>
    </div>
  )
}

export default Header
