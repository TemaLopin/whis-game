import ButtonStart from '../entity/game/components/button-start'
import GameWrapper from '../entity/game/components/wrapper'
import Header from '../entity/main-page/components/header'
import BodyInfoStart from '../entity/game/components/body-info-start'
import TitleGame from '../entity/game/components/title'
import DescriptionGame from '../entity/game/components/description'
import BottomImage from '../entity/game/components/bottom-image'
import DynamicEcho from '../shared/ui/dynamic-echo/DynamicEcho'

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
        <DynamicEcho type='heart'>
          <TitleGame />
        </DynamicEcho>
        <DescriptionGame items={descItem} />
        <ButtonStart title="Вперёд" link='/game/go'/>
      </BodyInfoStart>
      <BottomImage />
    </GameWrapper>
  )
}

export default GameStart
