import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/main'
import Error404 from './pages/404'
import GameStart from './pages/game-start'
import Game from './pages/game'
import ResultGame from './pages/game-result'
import GamePet from './pages/game-pet'
import GameAdvice from './pages/game-advice'

import 'swiper/css'
import 'swiper/css/effect-flip'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import GameAnalysis from './pages/game-analysis'
import GameResultAnalysis from './pages/game-result-analysis'
import { QueryClient, QueryClientProvider } from 'react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    },
  },
})

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='*' element={<Error404 />} />
        <Route path='/game' element={<GameStart />} />
        <Route path='/game/go' element={<Game />} />
        <Route path='/game/result/:id' element={<ResultGame />} />
        <Route path='/game/past-pet' element={<GamePet />} />
        <Route path='/game/advice' element={<GameAdvice />} />
        <Route path='/game/analysis' element={<GameAnalysis />} />
        <Route path='/game/result-analysis' element={<GameResultAnalysis />} />
        <Route path='/game/last-selects' element={<Game />} />
      </Routes>
    </QueryClientProvider>
  )
}

export default App
