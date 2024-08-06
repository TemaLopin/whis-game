import s from './style.module.scss'
import {Image} from "react-bootstrap";

import whisImg from '../../../../shared/assets/images/whis-main.png';
import pedigreeImg from '../../../../shared/assets/images/pedigree-main.png';

const BottomImages = () => {
    return <div className={s.body}>
        <div className={s.wrapper}>
            <div className={s.block_image}>
                <Image src={whisImg}/>
            </div>
            <div className={s.block_image}>
                <Image src={pedigreeImg}/>
            </div>
        </div>
    </div>

}

export default BottomImages;