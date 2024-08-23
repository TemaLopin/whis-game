import s from './style.module.scss'
import {ReactNode} from "react";
import clsx from "clsx";
import {useLocation} from "react-router-dom";
import useWindowDimensions from "../../../../shared/hooks/useWindowDimensions";

const AdviceWrapper = ({children}: { children: ReactNode }) => {
    const { height} = useWindowDimensions()
    const {search} = useLocation();

    return <div className={clsx('background', s.wrapper, search === '?animal=cat' ? s.wrapper_cat : s.wrapper_dog )}
                style={{height:  height > 800 ? '100vh' : `100%`}}>
        {children}
    </div>
}

export default AdviceWrapper;