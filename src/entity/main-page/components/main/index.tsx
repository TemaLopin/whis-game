import {ReactComponent as RubleIcon} from '../../../../shared/assets/icons/Ruble.svg'
import {ReactComponent as OneNumberIcon} from '../../../../shared/assets/icons/OneNumber.svg'

import ManWithCatImg from '../../../../shared/assets/images/man-with-cat.png'
import WomanWithCat from '../../../../shared/assets/images/woman-with-dog.png'
import SberThank from '../../../../shared/assets/icons/sber.svg'
import s from './style.module.scss'
import clsx from 'clsx'
import {Image} from 'react-bootstrap'
import useWindowDimensions from '../../../../shared/hooks/useWindowDimensions'
import Header from '../header'
import {useEffect, useRef, useState} from "react";
import Modal from "../modal";

const Footer = ({handler}: any) => {
    const {width} = useWindowDimensions();

    return (
        <div className={clsx(s.footer, 'container')}>
            <div className={s.send_to_shelter_text}>
                <div>
                    <OneNumberIcon/> <RubleIcon/>
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
                    <button className={s.get_bonus_button} onClick={handler}>
                        <p>нажми и получай бонусы</p>
                        <Image src={SberThank}/>
                    </button>
                </>
            ) : (
                <>
                    <button className={s.get_bonus_button} onClick={handler}>
                        <p>нажми и получай бонусы</p>
                        <Image src={SberThank}/>
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
    const [isOpen, setIsOpen] = useState(false);
    const modalHandler = () => {
        setIsOpen(prev => !prev);
        document.body.classList.toggle('noscroll')
    }
    useEffect(() => {
        if ((isOpen && window.innerWidth > 996) || isOpen && "ontouchstart" in document.documentElement) {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.paddingRight = `${scrollbarWidth}px`;
            document.body.classList.add('noscroll')
        } else {
            document.body.style.paddingRight = '';
            document.body.classList.remove('noscroll')
        }
        return () => {
            if (document.body.classList.contains('noscroll') && window.innerWidth > 996) {
                document.body.style.paddingRight = '';
                document.body.classList.remove('noscroll')
            }
        };
    }, [isOpen]);
    return (
        <div className={s.main} id="home">
            <Header/>
            <div className={clsx(s.images_background)}>
                <Image src={ManWithCatImg}/>
                <Image src={WomanWithCat}/>
            </div>
            <Footer handler={modalHandler}/>
            {isOpen && <Modal setIsOpen={setIsOpen}/>}
        </div>
    )
}

export default Main
