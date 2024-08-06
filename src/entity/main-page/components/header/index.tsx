import Whiskas from '../../../../shared/assets/images/whiskas-logo.png'
import Pedigree from '../../../../shared/assets/images/pedigree-logo.png'

import s from './style.module.scss'
import {Image} from 'react-bootstrap'
import Navigation from "../navigation";
import {useParams} from "react-router-dom";

const Header = () => {
    const pathUrl = useParams();
    return (
        <div className={s.header}>
            <Image src={Whiskas}/>
            {!pathUrl['*'] && <Navigation/>}
            <Image src={Pedigree}/>
        </div>
    )
}

export default Header
