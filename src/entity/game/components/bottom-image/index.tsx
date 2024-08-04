import s from "./style.module.scss";
import {Image} from "react-bootstrap";
import mobileImage from "../../../../shared/assets/images/404-bottom.png";
const BottomImage = () => {
    return (
        <div className={s.block_ima}>
            <Image src={mobileImage}/>
        </div>
    )
}

export default BottomImage;