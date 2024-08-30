import { Header } from '../../entity/main-page'
import ShelterMap from '../../entity/result-game/map'
import PetSlider from '../../entity/result-game/pet-slider'
import PetDescription from '../../entity/result-game/pet-description'
import SupportText from '../../entity/result-game/support-text'
import clsx from 'clsx'
import { PetInfo } from './components/types'

const ResultGame = () => {
  const data = JSON.parse(localStorage.getItem('current_pet') || '{}') as PetInfo

  const isDog = data?.type === 'dog'

  const tags = [...data.tagsPreview.split(','), ...data.tagsDetailed.split(',')]

  return (
    <div className='background pb50 '>
      <Header hasBackButton={true} />
      <div className={clsx('result_body', isDog ? 'dog_bg' : 'cat_bg')}>
        <div className={'result-left'}>
          <PetSlider data={data} />
          <div className={'tags'}>
            {tags
              .sort((a, b) => a.length - b.length)
              .map((tag, ind: number) => {
                return (
                  <div className={'tag'} key={ind}>
                    {tag}
                  </div>
                )
              })}
          </div>
        </div>
        <PetDescription data={data} isDog={isDog} />
      </div>
      <div className={clsx('result_body', isDog ? 'dog_bg' : 'cat_bg')}>
        <SupportText isDog={isDog} />
        <ShelterMap />
      </div>
    </div>
  )
}

export default ResultGame
