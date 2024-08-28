import s from './style.module.scss'
import { useLocation, useParams } from 'react-router-dom'
import clsx from 'clsx'

const DescriptionAnalyze = ({ texts }: { texts: string[] }) => {
  const { type } = useParams()
  return (
    <p className={clsx(s.description, type === 'cat' && s.description_cat)}>
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

export default DescriptionAnalyze
