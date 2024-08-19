import s from './style.module.scss'
import {Link} from "react-router-dom";
import {Image} from "react-bootstrap";
import title from '../../../../shared/assets/images/404.png';

import whisImage from '../../../../shared/assets/images/whiskas-bottom.png';
import pedigreeImage from '../../../../shared/assets/images/pedigree-bottom.png';
import mobileImage from '../../../../shared/assets/images/404-bottom.png';
import useWindowDimensions from "../../../../shared/hooks/useWindowDimensions";

const Content404 = () => {
    const {width} = useWindowDimensions();

    return <div className={s.body}>
        <h1 className={s.title}>
            <Image src={title}/>
        </h1>
        <div className={s.wrapper}>
            {width > 768 && <div className={s.block_image}>
                <Image src={whisImage}/>
            </div>}
            <div className={s.wrapper_info}>
                <h5 className={s.not_found}>Страница не найдена :(</h5>
                <p className={s.description}>
                    Проверьте адрес, возможно, там опечатка или <br/>вернитесь на главную страницу и
                    попробуйте найти <br/>нужную информацию там.
                </p>
                <Link to='/' className={s.button}>На главную</Link>
            </div>
            {width > 768 && <div className={s.block_image}>
                <Image src={pedigreeImage}/>
            </div>}
        </div>
        {width < 769 && <div className={s.block_image}>
            <Image src={mobileImage}/>
        </div>}
    </div>
}

export default Content404;