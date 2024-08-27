import s from './style.module.scss'
import closeIcon from '../../../../shared/assets/icons/close.svg'
import { Image } from 'react-bootstrap'

import InputMask from 'react-input-mask'
import { Dispatch, SetStateAction, useState } from 'react'
import useSendPhone from '../../../../shared/api/hooks/useSendPhone'

type Value = {
  phoneNumber: string
  success: boolean
  has18: boolean
}

const Modal = ({ setIsOpen }: { setIsOpen: Dispatch<SetStateAction<boolean>> }) => {
  const { mutate: sendPhone } = useSendPhone()
  const [value, setValue] = useState<Value>({
    phoneNumber: '',
    success: false,
    has18: false,
  })

  console.log('!@#$ ', value.phoneNumber)

  const handleChange = <T extends Partial<Value>>(value: T) => {
    setValue((prev) => ({ ...prev, ...value }))
  }

  const closeModalHandler = () => {
    setIsOpen(false)
    document.body.classList.remove('noscroll')
  }

  const handleSubmit = () => {
    sendPhone(value.phoneNumber)
    closeModalHandler()
  }

  const activeButton = value.has18 && value.success && value.phoneNumber.length > 2 && !value.phoneNumber.includes('_')

  return (
    <div className={s.modal}>
      <div className={s.body}>
        <div className={s.content}>
          <button className={s.close} onClick={closeModalHandler}>
            <Image src={closeIcon} />
          </button>
          <h2 className={s.title}>получить бонусы</h2>
          <p className={s.description}>
            Укажите номер телефона, с которым вы зарегистрированы в программе «СберСпасибо», чтобы получить бонусы
            Спасибо
          </p>
          <InputMask
            value={value?.phoneNumber}
            onChange={({ target }) => handleChange({ phoneNumber: String(target.value) })}
            mask='+7 (999) 999-99-99'
            type='text'
            placeholder='Введите номер'
          />
          <div className={s.wrapper}>
            <input
              checked={value?.success}
              onChange={({ target: { checked } }) => handleChange({ success: checked })}
              type='checkbox'
              id='top'
            />
            <label htmlFor='top'>
              Я соглашаюсь с Правилами Акции и даю согласие на обработку своих персональных данных Организатором Акции
            </label>
          </div>
          <div className={s.wrapper}>
            <input
              checked={value?.has18}
              onChange={({ target: { checked } }) => handleChange({ has18: checked })}
              type='checkbox'
              id='bottom'
            />
            <label htmlFor='bottom'>Мне исполнилось 18 лет</label>
          </div>
          <button onClick={handleSubmit} disabled={!activeButton} className={s.button}>
            отправить
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
