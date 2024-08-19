import s from './style.module.scss'
import {useContext} from 'react'
import {GameContext} from '../../../../pages/game'
import clsx from 'clsx'
import {Link, useLocation} from "react-router-dom";

const ButtonComplete = ({text = 'ЭТО ПРО МЕНЯ!', isAdvice = false}: any) => {
    const {selects}: any = useContext(GameContext);
    const {pathname} = useLocation();

    const isFullSelects = selects?.every((select: any) => select?.title !== '?')
    return <Link to={isAdvice && '/game/result' || isFullSelects ? '/game/past-pet' : pathname}
                 className={clsx(s.button, (isFullSelects || isAdvice) && s.button_active)}>
        {text}
    </Link>
}

export default ButtonComplete
