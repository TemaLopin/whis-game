import GameWrapper from '../../entity/game/components/wrapper'
import Header from '../../entity/main-page/components/header'

import BodyStart from '../../entity/game/components/body-start'

const GameStart = () => {
  return (
    <GameWrapper>
      <Header />
      <BodyStart />
    </GameWrapper>
  )
}

export default GameStart
