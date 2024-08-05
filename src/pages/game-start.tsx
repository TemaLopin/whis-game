import ButtonStart from '../entity/game/components/button-start'
import GameWrapper from '../entity/game/components/wrapper'
import Header from '../entity/main-page/components/header'
import BodyInfoStart from '../entity/game/components/body-info-start'
import TitleGame from '../entity/game/components/title'
import DescriptionGame from '../entity/game/components/description'
import BottomImage from '../entity/game/components/bottom-image'

const GameStart = () => {
  const descItem: string[] = [
    'Искусственный интеллект',
    'поможет найти питомца,',
    'подходящего именно вам или стать',
    'ещё ближе с вашим любимцем',
  ]
  return (
    <GameWrapper>
      <Header />
      <BodyInfoStart>
        <TitleGame />
        <DescriptionGame items={descItem} />
        <ButtonStart />
      </BodyInfoStart>
      <BottomImage />
    </GameWrapper>
  )
}

export default GameStart
