import s from './style.module.scss';
import LoveIcon from "./love-icon";
const SelectCharacteristic = ({select}: any) => {
    return (
        <div className={s.select_item}>
            <LoveIcon color="rgb(98, 25, 109)"/>
            <p className={s.title}>{select}</p>
        </div>
    )
}

export default SelectCharacteristic;