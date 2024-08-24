import s from './style.module.scss';
import {useRef} from "react";
//@ts-ignore
import {HashLink as Link} from 'react-router-hash-link';

const Navigation = () => {
    const refNav = useRef<HTMLUListElement>(null);
    const refBurger = useRef<HTMLButtonElement>(null);
    const nav = [
        {link: '/', title: 'главная'},
        {link: `/#aktie`, title: 'об акции'},
        {link: `/#helped`, title: 'Помогли вместе'},
        {link: `/#buy`, title: 'где купить?'}
    ];
    const burgerHandler = () => {
        if (refNav.current) {
            refNav.current?.classList.toggle(s.active);
        }
        if (refBurger.current) {
            refBurger.current?.classList.toggle(s.burger_active);
        }
    }
    return (
        <nav className={s.nav}>
            <ul className={s.list} ref={refNav}>
                {nav.map(({title, link}, ind) => {
                    return <li key={ind}><Link to={link}>{title}</Link></li>
                })}
            </ul>
            <div className={s.burger}>
                <button type="button" ref={refBurger} className={s.burger_icon} onClick={burgerHandler}>
                    <span></span>
                </button>
            </div>
        </nav>
    )
}

export default Navigation