import GameWrapper from "../entity/game/components/wrapper";
import Header from "../entity/main-page/components/header";
import BodyInfoStart from "../entity/game/components/body-info-start";
import DescriptionGame from "../entity/game/components/description";
import SelectsBlock from "../entity/game/components/selects-block";
import QuantityText from "../entity/game/components/quantity-text";
import ButtonStart from "../entity/game/components/button-start";
import ButtonComplete from "../entity/game/components/button-complete";
import Characteristics from "../entity/game/components/characteristics";
import {createContext, useEffect, useState} from "react";
export const GameContext = createContext({});
const Game = () => {

    const descItem: string[] = ['Выберите по одной характеристике', 'в каждой строке. Когда все четыре', 'характеристики выбраны, нажмите', 'кнопку «Это про меня!»'];
    const descItemDesktop: string[] = ['Выберите по одной характеристике', 'в каждой строке. Когда все четыре характеристики', ' выбраны, нажмите кнопку «Это про меня!»'];
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

    const [answer, setAnswer] = useState([]);
    const [indSelect, setIndSelect] = useState(2)
    const [categorySelect, setCategorySelect] = useState(1);
    const [selects, setSelects] = useState([
        {title: '?', category: 1},
        {title: '?', category: 2},
        {title: '?', category: 3},
        {title: '?', category: 4}
        ]);
    return (
        <GameWrapper>
            <Header/>
            <GameContext.Provider value={{
                setAnswer,
                answer,
                selects,
                setSelects,
                indSelect,
                setIndSelect,
                categorySelect,
                setCategorySelect
            }}>
                <BodyInfoStart>
                    <DescriptionGame items={width < 768 ? descItem : descItemDesktop}/>
                    <SelectsBlock/>
                    <QuantityText text="ЕЩЁ четыре СЕРДЕЧка!"/>
                    <ButtonComplete/>
                    <Characteristics/>
                </BodyInfoStart>
            </GameContext.Provider>
        </GameWrapper>
    )
}

export default Game;