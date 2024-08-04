import s from './style.module.scss'

const DescriptionGame = ({items}: any) => {
    return <p className={s.description}>
        {items.map((item: string, ind: number) => {
            return <>
                <span key={ind}>{item}</span>
                <br/>
            </>
        })}
    </p>
}

export default DescriptionGame;