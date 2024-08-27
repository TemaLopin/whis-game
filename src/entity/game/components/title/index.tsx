import s from './style.module.scss'
import DynamicEcho from '../../../../shared/ui/dynamic-echo/DynamicEcho'
const TitleGame = ({ title }: { title: string }) => {
  return (
    <div className={s.title_block}>
      <DynamicEcho type='heart'>
        <div className={s.block_image}>
          <h1 className={s.title}>{title}</h1>
        </div>
      </DynamicEcho>
    </div>
  )
}

export default TitleGame
