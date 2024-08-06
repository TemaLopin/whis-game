import {FindYourPets, Footer, GetSource, Main, Promotion, QuestionAnswer, WhereBye} from '../entity/main-page'
import BottomImages from "../entity/main-page/components/bottom-images";

const MainPage = () => {
    return (
        <div className={'background home'}>
            <Main/>
            <FindYourPets/>
            <Promotion/>
            <GetSource/>
            <WhereBye/>
            <QuestionAnswer/>
            <BottomImages/>
            <Footer/>
        </div>
    )
}

export default MainPage
