import Whiskas from '../../../../shared/assets/images/whiskas-logo.png'
import Pedigree from '../../../../shared/assets/images/pedigree-logo.png'

import s from './style.module.scss'
import { Image } from 'react-bootstrap'

const Header = () => {
  return (
    <div className={s.header} >
      <Image src={Whiskas} />
      burfer
      <Image src={Pedigree} />
    </div>
  )
}

export default Header
