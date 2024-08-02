import { FindYourPets, Footer, GetSource, Main, Promotion, QuestionAnswer, WhereBye } from '../entity/main-page'

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
