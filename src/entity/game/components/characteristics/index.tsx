import s from './style.module.scss';
import SelectCharacteristic from "../select";
import {useContext, useState} from "react";
import {GameContext} from "../../../../pages/game";

 export const characteristics = [
    {title: 'ЛЮБЛЮ ПОЛЕЖАТЬ', category: 1},
    {title: 'ЖИВУ УМЕРЕННО АКТИВНО', category: 1},
    {title: 'ВСЕГДА В ДВИЖЕНИИ', category: 1},
    {title: 'ПРЕДПОЧИТАЮ УЕДИНЕНИЕ', category: 2},
    {title: 'ОБЩАЮСЬ В МЕРУ', category: 2},
    {title: 'ЛЮБЛЮ ОБЩЕНИЕ', category: 2},
    {title: 'ДУМАЮ НЕ СПЕША', category: 3},
    {title: 'Вникаю в своём темпе', category: 3},
    {title: 'схватываю НА ЛЕТУ', category: 3},
    {title: 'Сдерживаю эмоции', category: 4},
    {title: 'Действую по настроению', category: 4},
    {title: 'Даю волю чувствам', category: 4}
];
const Characteristics = () => {
    const {indSelect}: any = useContext(GameContext)

    return <div className={s.bg}>
        <div className={s.body}>
            {characteristics.map((item, ind, arr) => {
                return <SelectCharacteristic
                    item={item}
                    key={ind}
                    isActive={ind > indSelect}/>
            })}
        </div>
    </div>
}

export default Characteristics;