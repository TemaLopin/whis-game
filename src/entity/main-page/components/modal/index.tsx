import s from './style.module.scss';
import closeIcon from '../../../../shared/assets/icons/close.svg';
import {Image} from "react-bootstrap";
import {useEffect} from "react";

const Modal = ({setIsOpen}: any) => {
    const closeModalHandler = () => {
        setIsOpen(false);
        document.body.classList.remove('noscroll')
    }
    return <div className={s.modal}>
        <div className={s.body}>
            <div className={s.content}>
                <button className={s.close} onClick={closeModalHandler}>
                    <Image src={closeIcon}/>
                </button>
                <h2 className={s.title}>получить бонусы</h2>
                <p className={s.description}>
                    Укажите номер телефона, с которым вы зарегистрированы в программе «СберСпасибо», чтобы получить
                    бонусы Спасибо
                </p>
                <input type="text" placeholder="Введите номер"/>
                <div className={s.wrapper}>
                    <input type="checkbox" id="top"/>
                    <label htmlFor="top">
                        Я соглашаюсь с Правилами Акции и даю согласие на обработку своих персональных данных
                        Организатором Акции
                    </label>
                </div>
                <div className={s.wrapper}>
                    <input type="checkbox" id="bottom"/>
                    <label htmlFor="bottom">
                        Мне исполнилось 18 лет.*
                    </label>
                </div>
                <button className={s.button}>отправить</button>
            </div>
        </div>
    </div>
}

export default Modal