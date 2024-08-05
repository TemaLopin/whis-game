import s from './style.module.scss';
import SelectCharacteristic from "../select";
const Characteristics = () => {
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
    return <div className={s.body}>
        {characteristics.map(({title}, ind) => {
            return <SelectCharacteristic select={title} key={ind} />
        })}
    </div>
}

export default Characteristics;