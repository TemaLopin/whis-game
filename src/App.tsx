import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/main";
import Error404 from "./pages/404";

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='*' element={<Error404 />} />
        </Routes>
    )
}

export default App;