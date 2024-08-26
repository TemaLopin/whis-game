import s from './style.module.scss'
import SelectCharacteristic from '../select'
import {characteristics, GameContext, lastCharacteristics} from '../../../../pages/game'
import BottomWrapper from '../bottom-wrapper'
import {useLocation} from 'react-router-dom'
import {useContext, useEffect, useRef, useState} from 'react'
import {Image} from "react-bootstrap";
import paw from "../../../../shared/assets/images/paw.png";

const Characteristics = () => {
    const [firstRender, setFirstRender] = useState(true)
    const {pathname} = useLocation()
    const data = pathname === '/game/last-selects' ? lastCharacteristics : characteristics
    const {isVisible, position}: any = useContext(GameContext);
    useEffect(() => {
        setTimeout(() => setFirstRender(false), 2000)
    }, [])


    return (
        <BottomWrapper>
            <div data-animch={firstRender ? '3' : '1'} className={s.body}>
                {data.map((item, ind, arr) => {
                    return <SelectCharacteristic item={item} key={ind}/>
                })}
            </div>
            <Image src={paw} className={isVisible ? s.move : s.paw}
                   style={{transform: `translate(${isVisible ? position.x : 0}px, ${isVisible ? position.y : - 10000}px)`}}
            />
        </BottomWrapper>
    )
}

export default Characteristics
