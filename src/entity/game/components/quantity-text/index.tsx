import s from './style.module.scss';
const QuantityText = ({text}: any) => {
    return <p className={s.text}>
        {text}
    </p>
}

export default QuantityText;