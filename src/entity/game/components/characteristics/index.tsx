import s from './style.module.scss'
import SelectCharacteristic from '../select'
import {characteristics, lastCharacteristics} from '../../../../pages/game'
import BottomWrapper from '../bottom-wrapper'
import {useLocation} from 'react-router-dom'
import {useEffect, useRef, useState} from 'react'

const Characteristics = () => {
    const [firstRender, setFirstRender] = useState(true)
    const {pathname} = useLocation()
    const data = pathname === '/game/last-selects' ? lastCharacteristics : characteristics

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
        </BottomWrapper>
    )
}

export default Characteristics
