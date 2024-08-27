import s from './style.module.scss'
import { useLocation } from 'react-router-dom'
import clsx from 'clsx'

const DescriptionGame = ({ texts }: { texts: string[] }) => {
  const { search } = useLocation()
  return (
    <p className={clsx(s.description, search === '?animal=cat' && s.description_cat)}>
      {texts.map((text, ind: number) => {
        return (
          <div key={ind}>
            <span>{text}</span>
            <br />
          </div>
        )
      })}
    </p>
  )
}

export default DescriptionGame
