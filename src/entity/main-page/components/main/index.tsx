import { ReactComponent as RubleIcon } from '../../../../shared/assets/icons/Ruble.svg'
import { ReactComponent as OneNumberIcon } from '../../../../shared/assets/icons/OneNumber.svg'

import ManWithCatImg from '../../../../shared/assets/images/man-with-cat.png'
import WomanWithCat from '../../../../shared/assets/images/woman-with-dog.png'
import SberThank from '../../../../shared/assets/images/sber-thank.png'

import s from './style.module.scss'
import clsx from 'clsx'
import { Image } from 'react-bootstrap'
import useWindowDimensions from '../../../../shared/hooks/useWindowDimensions'
import Header from '../header'

const Footer = () => {
  const { width } = useWindowDimensions()

  return (
    <div className={clsx(s.footer, 'container')}>
      <div className={s.send_to_shelter_text}>
        <div>
          <OneNumberIcon /> <RubleIcon />
        </div>
        <div className={s.footer_text}>
          <p>с каждой Пачки*</p> <p> отправим в приюты </p>
          <p> для кошек и собак**</p>
        </div>
      </div>
      {width > 1300 ? (
        <>
          <div className={s.learn_more}>
            <p>Узнать больше</p>
          </div>
          <button className={s.get_bonus_button}>
            <p>нажми и получай бонусы</p>
            <Image src={SberThank} />
          </button>
        </>
      ) : (
        <>
          <button className={s.get_bonus_button}>
            <p>нажми и получай бонусы</p>
            <Image src={SberThank} />
          </button>
          <div className={s.learn_more}>
            <p>Узнать больше</p>
          </div>
        </>
      )}
    </div>
  )
}

const Main = () => {
  return (
    <div className={s.main}>
      <Header />
      <div className={clsx(s.images_background)}>
        <Image src={ManWithCatImg} />
        <Image src={WomanWithCat} />
      </div>
      <Footer />
    </div>
  )
}

export default Main
