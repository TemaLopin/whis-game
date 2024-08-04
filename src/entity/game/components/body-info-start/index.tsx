import s from "./style.module.scss";
import {ReactNode} from "react";

const BodyInfoStart = ({children}: { children: ReactNode }) => {
    return <div className={s.body}>
        {children}
    </div>
}

export default BodyInfoStart;