import ButtonStart from '../entity/game/components/button-start'
import GameWrapper from '../entity/game/components/wrapper'
import Header from '../entity/main-page/components/header'
import BodyInfoStart from '../entity/game/components/body-info-start'
import TitleGame from '../entity/game/components/title'
import DescriptionGame from '../entity/game/components/description'
import BottomImage from '../entity/game/components/bottom-image'
import DynamicEcho from '../shared/ui/dynamic-echo/DynamicEcho'
import BodyStart from "../entity/game/components/body-start";

const GameStart = () => {
  return (
    <GameWrapper>
      <Header />
        <BodyStart />
    </GameWrapper>
  )
}

export default GameStart
