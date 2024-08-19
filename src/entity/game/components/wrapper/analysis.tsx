import s from './style.module.scss'
import {ReactNode} from "react";
import clsx from "clsx";
import useWindowDimensions from "../../../../shared/hooks/useWindowDimensions";
import {useLocation} from "react-router-dom";

const GameAnalysisWrapper = ({children}: { children: ReactNode }) => {
    const {height} = useWindowDimensions();
    const {pathname} = useLocation();
    return <div className={clsx('background', s.wrapper_game, s.wrapper_analysis)}
                style={{minHeight: height}}>
        <div className={clsx('analysis-wrapper', s.subwrapper, pathname === '/game/analysis' && 'analysis-wrapper_h')}>
            {children}
        </div>

    </div>
}

export default GameAnalysisWrapper;