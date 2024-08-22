import s from './style.module.scss'
import { useLocation } from 'react-router-dom'
import clsx from 'clsx'

const DescriptionGame = ({ items }: any) => {
  const { search } = useLocation()
  return (
    <p className={clsx(s.description, search === '?animal=cat' && s.description_cat)}>
      {items.map((item: string, ind: number) => {
        return (
          <div key={ind}>
            <span>{item}</span>
            <br />
          </div>
        )
      })}
    </p>
  )
}

export default DescriptionGame
