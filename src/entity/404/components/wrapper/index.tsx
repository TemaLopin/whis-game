import s from './style.module.scss'
import {ReactNode, useEffect, useState} from "react";
import clsx from "clsx";
import useWindowDimensions from "../../../../shared/hooks/useWindowDimensions";
import {useLocation} from "react-router-dom";

const Wrapper404 = ({children}: { children: ReactNode }) => {
    const {width, height} = useWindowDimensions();
    const {pathname} = useLocation();
    return <div className={clsx('background', (pathname === '/game/past-pet' || width > 996 && height > 718) ? s.wrapper : s.wrapper_height)}>
        {children}
    </div>
}

export default Wrapper404;