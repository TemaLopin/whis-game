import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/main'
import Error404 from './pages/404'
import GameStart from './pages/game-start'
import Game from './pages/game'
import ResultGame from './pages/game-result'

import 'swiper/css'
import 'swiper/css/effect-flip'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='*' element={<Error404 />} />
      <Route path='/game' element={<GameStart />} />
      <Route path='/game/go' element={<Game />} />
      <Route path='/game/result' element={<ResultGame />} />
    </Routes>
  )
}

export default App
