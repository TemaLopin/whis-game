import s from './style.module.scss';
import SelectCharacteristic from "../select";
import {useContext, useState} from "react";
import {GameContext} from "../../../../pages/game";

const Characteristics = () => {
    const {activeClass}: any = useContext(GameContext)
    const characteristics = [
        {title: 'ЛЮБЛЮ ПОЛЕЖАТЬ'},
        {title: 'ЖИВУ УМЕРЕННО АКТИВНО'},
        {title: 'ВСЕГДА В ДВИЖЕНИИ'},
        {title: 'ПРЕДПОЧИТАЮ УЕДИНЕНИЕ'},
        {title: 'ОБЩАЮСЬ В МЕРУ'},
        {title: 'ЛЮБЛЮ ОБЩЕНИЕ'},
        {title: 'ДУМАЮ НЕ СПЕША'},
        {title: 'Вникаю в своём темпе'},
        {title: 'схватываю НА ЛЕТУ'},
        {title: 'Сдерживаю эмоции'},
        {title: 'Действую по настроению'},
        {title: 'Даю волю чувствам'}
    ];


    return <div className={s.bg}>
        <div className={s.body}>
            {characteristics.map(({title}, ind) => {
                return <SelectCharacteristic
                    select={title}
                    key={ind}
                    ind={ind}
                    isActive={ind > activeClass}/>
            })}
        </div>
    </div>
}

export default Characteristics;