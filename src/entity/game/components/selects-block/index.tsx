import s from './style.module.scss'
import SelectCharacteristic from "../select";

const SelectsBlock = () => {
    const selects = ['?', '?', '?', '?'];
    return (
        <div className={s.wrapper}>
            {selects.map((select: string, ind: number) => {
                return <SelectCharacteristic key={ind} select={select} bg="rgb(98, 25, 109)" />
            })}
        </div>
    )
}

export default SelectsBlock