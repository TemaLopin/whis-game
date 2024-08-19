import s from './style.module.scss'
import {Image} from 'react-bootstrap'
import robot from '../../../../shared/assets/images/robot-icon.png'

import {Link, useLocation} from 'react-router-dom'
import DynamicEcho from '../../../../shared/ui/dynamic-echo/DynamicEcho'
import clsx from "clsx";

const ButtonStart = ({title, link}: any) => {
    const {pathname} = useLocation();

    return (
        <div className={s.wrapper}>
            <DynamicEcho type='echo'>
                <Link to={link} className={clsx(s.button_start,pathname === '/game/analysis' && s.button_robot)}>
                    {pathname === '/game' && <Image src={robot}/>}
                    {pathname !== '/game/analysis' ? <span className={s.btn_text}>{title}</span> :
                        <Image src={robot}/>}
                </Link>
            </DynamicEcho>
        </div>
    )
}

export default ButtonStart
