import s from './style.module.scss';
import SelectCharacteristic from "../select";
import {useContext} from "react";
import {characteristics, GameContext} from "../../../../pages/game";
import BottomWrapper from "../bottom-wrapper";

const Characteristics = () => {
    const {indSelect}: any = useContext(GameContext)

    return <BottomWrapper>
        <div className={s.body}>
            {characteristics.map((item, ind, arr) => {
                return <SelectCharacteristic
                    item={item}
                    key={ind}
                    isActive={ind > indSelect}/>
            })}
        </div>
    </BottomWrapper>
}

export default Characteristics;