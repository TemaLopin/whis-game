import GameWrapper from '../entity/game/components/wrapper'
import Header from '../entity/main-page/components/header'
import BodyInfoStart from '../entity/game/components/body-info-start'
import DescriptionGame from '../entity/game/components/description'
import SelectsBlock from '../entity/game/components/selects-block'
import QuantityText from '../entity/game/components/quantity-text'
import ButtonComplete from '../entity/game/components/button-complete'
import Characteristics from '../entity/game/components/characteristics'
import {createContext, useEffect, useState} from 'react'
import DynamicEcho from '../shared/ui/dynamic-echo/DynamicEcho'
import {useLocation} from "react-router-dom";
import useWindowDimensions from "../shared/hooks/useWindowDimensions";

export const GameContext = createContext({})

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

export const lastCharacteristics = [
    {title: 'ЛЮБЛЮ ПОЛЕЖАТЬ', category: 1},
    {title: 'ЖИВУ УМЕРЕННО АКТИВНО', category: 1},
    {title: 'ВСЕГДА В ДВИЖЕНИИ', category: 1},
    {title: 'ПРЕДПОЧИТАЮ УЕДИНЕНИЕ', category: 2},
    {title: 'ОБЩАЮСЬ В МЕРУ', category: 2},
    {title: 'ЛЮБЛЮ ОБЩЕНИЕ', category: 2},
    {title: 'Реагирует не сразу', category: 3},
    {title: 'Понимает что к чему', category: 3},
    {title: 'схватываю с полуслова', category: 3},
]

const Game = () => {
    const {pathname} = useLocation();
    const descItem: string[] = pathname !== '/game/last-selects' ? [
        'Выберите по одной характеристике',
        'в каждой строке. Когда все четыре',
        'характеристики выбраны, нажмите',
        'кнопку «Это про меня!»',
    ] : [
        'ВЫБЕРИТЕ В КАЖДОЙ СТРОЧКЕ ПО ОДНОЙ',
        'ХАРАКТЕРИСТИКЕ, БЛИЗКОЙ ВАШЕМУ ПИТОМЦУ.',
        'КОГДА ТРИ ХАРАКТЕРИСТИКИ ВЫБРАНЫ,',
        'НАЖМИТЕ «ГОТОВО!»',
    ];

    const descItemDesktop: string[] = pathname !== '/game/last-selects' ? [
        'Выберите по одной характеристике',
        'в каждой строке. Когда все четыре характеристики',
        ' выбраны, нажмите кнопку «Это про меня!»',
    ] : [
        'ВЫБЕРИТЕ В КАЖДОЙ СТРОЧКЕ ПО ОДНОЙ ХАРАКТЕРИСТИКЕ',
        'Выберите , БЛИЗКОЙ ВАШЕМУ ПИТОМЦУ. КОГДА',
        'ТРИ ХАРАКТЕРИСТИКИ ВЫБРАНЫ, НАЖМИТЕ «ГОТОВО!»',
    ];
    const {width} = useWindowDimensions();

    const selectsGame = pathname !== '/game/last-selects' ?
        [{title: '?', category: 1}, {title: '?', category: 2}, {title: '?', category: 3}, {title: '?', category: 4}] :
        [{title: '?', category: 1}, {title: '?', category: 2}, {title: '?', category: 3}];

    const pathBtn = pathname !== '/game/last-selects' ? '/game/past-pet' : '/game/advice';
    const [answer, setAnswer] = useState([])
    const [indSelect, setIndSelect] = useState(2)
    const [categorySelect, setCategorySelect] = useState(1)
    const [selects, setSelects] = useState(selectsGame)
    return (
        <GameWrapper>
            <Header/>
            <GameContext.Provider
                value={{
                    setAnswer,
                    answer,
                    selects,
                    setSelects,
                    indSelect,
                    setIndSelect,
                    categorySelect,
                    setCategorySelect,
                }}
            >
                <BodyInfoStart>
                    <DescriptionGame
                        items={width < 768 ?  descItem : descItemDesktop}/>
                    <SelectsBlock/>
                    <QuantityText/>
                    <DynamicEcho type='button'>
                        <ButtonComplete link={pathBtn}/>
                    </DynamicEcho>
                    <Characteristics/>
                </BodyInfoStart>
            </GameContext.Provider>
        </GameWrapper>
    )
}

export default Game
