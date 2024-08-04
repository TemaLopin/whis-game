import s from './style.module.scss'
import {Image} from "react-bootstrap";
import robot from '../../../../shared/assets/images/robot-icon.png';
import Line from "./line";
import {Link} from "react-router-dom";
const ButtonStart = () => {
    return (
        <div className={s.wrapper}>
            <Link to="/game/go" className={s.button_start}>
                <Image src={robot} />
                <span className={s.btn_text}>Вперёд</span>
            </Link>
            <Line />
        </div>
    )
}

export default ButtonStart;