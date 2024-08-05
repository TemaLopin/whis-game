import s from './style.module.scss';
import LoveIcon from "./love-icon";
const SelectCharacteristic = ({select, bg = '#fff'}: any) => {
    return (
        <div className={s.select_item}>
            <LoveIcon color={bg}/>
            <p className={bg !== '#fff' ? s.title : s.title_ask}>{select}</p>
        </div>
    )
}

export default SelectCharacteristic;