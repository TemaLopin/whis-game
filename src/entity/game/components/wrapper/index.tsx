import s from './style.module.scss'
import {ReactNode} from "react";
import clsx from "clsx";
import {useLocation} from "react-router-dom";
import useWindowDimensions from "../../../../shared/hooks/useWindowDimensions";

const GameWrapper = ({children}: { children: ReactNode }) => {
    const {isMobile, height} = useWindowDimensions()
    const {pathname} = useLocation();
    return <div className={clsx('background', s.wrapper,(pathname === '/game/go'  ||
        (pathname === '/game/advice'  && isMobile))  && s.wrapper_game)}
    style={{minHeight: height}}>
        {children}
    </div>
}

export default GameWrapper;