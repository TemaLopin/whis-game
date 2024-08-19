import s from './style.module.scss';
import LoveIcon from "./love-icon";
import {useContext, useState} from "react";
import {characteristics, GameContext} from "../../../../pages/game";
import SelectLove from "./select-love";
import clsx from "clsx";
import AnswerIcon from "./answer-icon";
import RemoveIcon from "./remove-icon";

const SelectCharacteristic = ({bg = '#fff', selectAsk = false, item}: any) => {
    const {
        answer,
        setAnswer,
        setSelects,
        setIndSelect,
        categorySelect,
        setCategorySelect,
    }: any = useContext(GameContext);

    const selectCharacteristicHandler = () => {

        setSelects((prev: any) => prev.map((sel: any, ind: number, arr: any) => {
            const firstIndexAsk = arr.findIndex((sel: any) => sel.title == '?');
            if (ind === firstIndexAsk) {
                return item
            }
            return sel;
        }));
        setAnswer((prev: any) => [...prev, item]);
        setCategorySelect(categorySelect + 1);
    }


    const removeSelectHandler = () => {
        let indSelectCharacteristic = characteristics.findIndex(({title}, i) => title === item?.title && i - 3);

        setSelects((prev: any) => prev.map((sel: any) => {
            if (sel.title === item?.title) {
                return {title: '?', category: item?.category}
            }
            return sel;
        }));

        setAnswer((prev: any) => prev.filter((ans: any) => ans.title !== item?.title));

        setCategorySelect(item?.category);
        if (indSelectCharacteristic <= 5 && indSelectCharacteristic >= 3) {
            indSelectCharacteristic = 5
            return indSelectCharacteristic - 3;
        } else if (indSelectCharacteristic <= 8 && indSelectCharacteristic >= 6) {
            indSelectCharacteristic = 8
            return indSelectCharacteristic - 3;
        } else if (indSelectCharacteristic <= 11 && indSelectCharacteristic >= 9) {
            indSelectCharacteristic = 11
            return indSelectCharacteristic - 3;
        } else {
            indSelectCharacteristic = 2
        }
        setIndSelect(indSelectCharacteristic);

    }

    const checkAnswer = bg !== '#fff' && answer?.includes(item);

    const isAnswer = answer.some(({category}: any) => category === item?.category);

    return (
        <>
            {!checkAnswer && isAnswer ?
                <div className={s.select_answer}>
                    <AnswerIcon/>
                </div>
                : <button
                    className={clsx(s.select_item,

                        !checkAnswer && s.select_item_none,

                        ((!selectAsk && item?.category === categorySelect)) && s.select_item_toggle,

                        checkAnswer && s.select_item_active,
                    )}
                    onClick={!selectAsk ? selectCharacteristicHandler : undefined}>
                    {checkAnswer && <div className={s.remove_item} onClick={removeSelectHandler}><RemoveIcon/></div>}
                    {checkAnswer ? <SelectLove/> : <LoveIcon color={bg}/>}
                    <p className={bg !== '#fff' ? s.title : s.title_ask}>{item?.title}</p>
                </button>
            }
        </>
    )
}

export default SelectCharacteristic;