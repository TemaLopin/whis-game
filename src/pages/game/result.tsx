import { Header } from '../../entity/main-page'
import ShelterMap from '../../entity/result-game/map'
import PetSlider from '../../entity/result-game/pet-slider'
import PetDescription from '../../entity/result-game/pet-description'
import SupportText from '../../entity/result-game/support-text'
import clsx from 'clsx'

const ResultGame = () => {
  const isDog = true

  const tags = [
    'Люблю полежать',
    'Живу умеренно',
    'Всегда в движении',

    'Всегда в движении, Люблю полежат',
    'Живу умеренно',
  ]

  return (
    <div className='background pb50'>
      <Header />
      <div className={clsx('container', 'result_body', isDog ? 'dog_bg' : 'cat_bg')}>
        <div className={'result-left'}>
          <PetSlider />
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
        <PetDescription isDog={isDog} />
      </div>
      <div className={clsx('container', 'result_body', isDog ? 'dog_bg' : 'cat_bg')}>
        <SupportText isDog={isDog} />
        <ShelterMap />
      </div>
    </div>
  )
}

export default ResultGame
