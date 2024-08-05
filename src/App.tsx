import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/main'
import Error404 from './pages/404'
import GameStart from './pages/game-start'
import Game from './pages/game'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='*' element={<Error404 />} />
      <Route path='/game' element={<GameStart />} />
      <Route path='/game/go' element={<Game />} />
    </Routes>
  )
}

export default App
