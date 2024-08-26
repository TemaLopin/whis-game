import clsx from 'clsx'
import s from './style.module.scss'

const SupportText = ({ isDog }: { isDog: boolean }) => {
  return (
    <div className={s.body}>
      <div>
        <p className={s.title}>ПОДДЕРЖИТЕ приюты </p>
        <p className={clsx(s.title, s.sub_title)}>поблизости</p>
      </div>
      <p className={clsx(s.text, isDog ? 'black_color' : 'white_color')}>
        Если вы хотите поддержать тех, кто рядом, найдите на карте приют и свяжитесь с ним, чтобы узнать, как помочь его
        обитателям
      </p>
    </div>
  )
}

export default SupportText
