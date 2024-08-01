import clsx from 'clsx'
import s from './style.module.scss'

import { ReactComponent as RubleIcon } from '../../../shared/assets/icons/Ruble.svg'
import { ReactComponent as OneNumberIcon } from '../../../shared/assets/icons/OneNumber.svg'
// import { ReactComponent as DownArrow } from '../../../shared/assets/icons/DownArrow.svg'

import SberThank from '../../../shared/assets/images/sber-thank.png'
import { Image } from 'react-bootstrap'

const FindYourPets = () => {
  return (
    <div className={clsx('background')}>
      <div className={s.echo_bg}>
        <div className={clsx('container', s.main_block)}>
          <div className={s.main_body}>
            <div className={s.main_text}>
              <p>найдите питомца</p>
              <p>по характеру с помощью</p>
              <span> искусственного интеллекта</span>
            </div>
            <div className={s.sub_text}>
              <p>Подберите питомца со схожими чертами характера вместе </p>
              <p>
                с <span>искусственным интеллектом </span>
                или узнайте, как сблизиться со своим любимцем
              </p>
            </div>

            <button className={s.start_button}>НАЧАТЬ*</button>
          </div>
        </div>
        <div className='container'>
          <div className={clsx(s.about_block)}>
            <div className={s.about_bye_block}>
              <p className={s.block_title}>Купите</p>
              <div>
                <span>любой продукт </span>
                <span>товаров-участников акции</span>
              </div>
              <div className={s.ruble}>
                <OneNumberIcon />
                <RubleIcon />
              </div>
              <span>с каждой упаковки отправится в приюты для кошек и собак</span>
            </div>

            {/* <p className={s.right_arrow}>
            <DownArrow />
          </p> */}

            <div className={s.get_block}>
              <p className={s.block_title}>получите</p>
              <div>
                <span> от суммы покупки</span> <span>10% бонусами</span>
              </div>
              <Image className={s.sber} src={SberThank} />
              <span>при оплате покупки картой Сбербанка</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FindYourPets
