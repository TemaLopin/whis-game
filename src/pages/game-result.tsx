import { Header } from '../entity/main-page'
import ShelterMap from '../entity/result-game/map'
import PetSlider from '../entity/result-game/pet'
import PetDescription from '../entity/result-game/pet-description'
import SupportText from '../entity/result-game/support-text'

const ResultGame = () => {
  return (
    <div className='background'>
      <Header />
      <div className={'result_body container'}>
        <PetSlider />
        <PetDescription />
      </div>
      <div className={'result_body container'}>
        <SupportText />
        <ShelterMap />
      </div>
    </div>
  )
}

export default ResultGame
