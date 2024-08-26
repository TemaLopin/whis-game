import s from "./style.module.scss";
import {ReactNode, useEffect, useRef, useState} from "react";

const BottomWrapper = ({children}: { children: ReactNode }) => {
    const [height, setHeight] = useState(0)
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (ref.current) {
            setHeight(ref?.current?.scrollHeight)
        }
    }, [])
    return <div className={s.bg} style={{height: height}} ref={ref}>
        {children}
    </div>
}

export default BottomWrapper