import s from './style.module.scss'
import {ReactNode} from "react";
import clsx from "clsx";
import {useLocation} from "react-router-dom";

const GameWrapper = ({children}: { children: ReactNode }) => {
    const {pathname} = useLocation();
    return <div className={clsx('background', s.wrapper,pathname === '/game/go' && s.wrapper_game)}>
        {children}
    </div>
}

export default GameWrapper;