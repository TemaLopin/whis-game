import FindYourPets from '../features/main-page/find-your-pet'
import Footer from '../features/main-page/footer'
import GetSource from '../features/main-page/get-sourse'
import Main from '../features/main-page/main'
import Promotion from '../features/main-page/promotion'
import QuestionAnswer from '../features/main-page/QA'
import WhereBye from '../features/main-page/where-bye'

const MainPage = () => {
  return (
    <div className={'background'}>
      <Main />
      <FindYourPets />
      <Promotion />
      <GetSource />
      <WhereBye />
      <QuestionAnswer />
      <Footer />
    </div>
  )
}

export default MainPage
