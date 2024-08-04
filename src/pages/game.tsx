import GameWrapper from "../entity/game/components/wrapper";
import Header from "../entity/main-page/components/header";
import BodyInfoStart from "../entity/game/components/body-info-start";
import DescriptionGame from "../entity/game/components/description";
import SelectsBlock from "../entity/game/components/selects-block";
import QuantityText from "../entity/game/components/quantity-text";
import ButtonStart from "../entity/game/components/button-start";
import ButtonComplete from "../entity/game/components/button-complete";

const Game = () => {



    const descItem: string[] = ['Выберите по одной характеристике', 'в каждой строке. Когда все четыре', 'характеристики выбраны, нажмите',  'кнопку «Это про меня!»']
    return (
        <GameWrapper>
            <Header/>
            <BodyInfoStart>
                <DescriptionGame items={descItem}/>
                <SelectsBlock />
                <QuantityText text="ЕЩЁ четыре СЕРДЕЧка!" />
                <ButtonComplete />
            </BodyInfoStart>
        </GameWrapper>
    )
}

export default Game;