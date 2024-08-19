import s from "./style.module.scss";
const TitleGame = ({title}: any) => {
    return <div className={s.block_image}>
        <h1 className={s.title}>{title}
        </h1>
    </div>
}

export default TitleGame;