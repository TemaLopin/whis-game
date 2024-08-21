import s from './style.module.scss'
import {useContext} from 'react'
import {GameContext} from '../../../../pages/game'
import clsx from 'clsx'
import {Link, useLocation} from "react-router-dom";

const ButtonComplete = ({text = 'ЭТО ПРО МЕНЯ!', link}: any) => {
    const {selects}: any = useContext(GameContext);
    const {pathname} = useLocation();

    const isFullSelects = selects?.every((select: any) => select?.title !== '?')
    return <Link to={(isFullSelects || pathname === '/game/advice') && link}
                 className={clsx(s.button, (isFullSelects || pathname === '/game/advice')  && s.button_active)}>
        { pathname === '/game/last-selects' ? 'готово!' : text}
    </Link>
}

export default ButtonComplete
