import s from './style.module.scss'
import {Image} from 'react-bootstrap'
import robot from '../../../../shared/assets/images/robot-icon.png'

import {Link, useLocation} from 'react-router-dom'
import DynamicEcho from '../../../../shared/ui/dynamic-echo/DynamicEcho'

const ButtonStart = ({title, link}: any) => {
    const {pathname} = useLocation();

    return (
        <div className={s.wrapper}>
            <DynamicEcho type='echo'>
                <Link to={link} className={s.button_start}>
                    {pathname === '/game' && <Image src={robot}/>}
                    <span className={s.btn_text}>{title}</span>
                </Link>
            </DynamicEcho>
        </div>
    )
}

export default ButtonStart
