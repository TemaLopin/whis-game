import s from './style.module.scss';
import LoveIcon from "./love-icon";
import {useContext} from "react";
import {GameContext} from "../../../../pages/game";
import SelectLove from "./select-love";
import clsx from "clsx";

const SelectCharacteristic = ({select, bg = '#fff', isActive = false, selectAsk = false, ind}: any) => {
    const {answer, setAnswer, setSelects, setActiveClass, activeClass}: any = useContext(GameContext)
    const selectCharacteristicHandler = () => {
        setAnswer((prev: any) => [...prev, select])
        setSelects((prev: any) => prev.map((item: string, ind: number) => {
            if (ind === answer.length) {
                setActiveClass((prev: any) => prev + 3)
                return select
            }
            return item;
        }));

    }
    const checkAnswer = bg !== '#fff' && answer?.includes(select);
    console.log(activeClass, ind)
    return (
        <button className={clsx(s.select_item, activeClass < ind && s.select_item_none ,checkAnswer && s.select_item_active)}
                onClick={!selectAsk ? selectCharacteristicHandler : undefined}>
            { checkAnswer ? <SelectLove/> : <LoveIcon color={bg} isActive={isActive}/>}
            <p className={bg !== '#fff' ? s.title : s.title_ask}>{select}</p>
        </button>
    )
}

export default SelectCharacteristic;