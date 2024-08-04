import s from './style.module.scss'
import {ReactNode} from "react";
import clsx from "clsx";

const GameWrapper = ({children}: { children: ReactNode }) => {

    return <div className={clsx('background', s.wrapper)}>
        {children}
    </div>
}

export default GameWrapper;