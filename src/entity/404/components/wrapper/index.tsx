import s from './style.module.scss'
import {ReactNode, useEffect, useState} from "react";
import clsx from "clsx";

const Wrapper404 = ({children}: { children: ReactNode }) => {
    const [height, setHeight] = useState(window.innerHeight);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResizeWindow = () => {
            setHeight(window.innerHeight)
            setWidth(window.innerWidth)
        };
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

    return <div className={clsx('background', (width > 996 && height > 718) ? s.wrapper : s.wrapper_height)}>
        {children}
    </div>
}

export default Wrapper404;