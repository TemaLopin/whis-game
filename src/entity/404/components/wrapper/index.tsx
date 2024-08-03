import s from './style.module.scss'
import {ReactNode, useEffect, useState} from "react";
import clsx from "clsx";

const Wrapper404 = ({children}: { children: ReactNode }) => {
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResizeWindow = () => setHeight(window.innerHeight);
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

    return <div className={clsx('background', height > 718 ? s.wrapper : s.wrapper_height)}>
        {children}
    </div>
}

export default Wrapper404;