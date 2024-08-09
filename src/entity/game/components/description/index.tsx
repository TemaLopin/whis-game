import s from './style.module.scss'

const DescriptionGame = ({items}: any) => {
    return <p className={s.description}>
        {items.map((item: string, ind: number) => {
            return <div key={ind}>
                <span>{item}</span>
                <br/>
            </div>
        })}
    </p>
}

export default DescriptionGame;