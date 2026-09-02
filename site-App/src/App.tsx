import LandingPage from './pages/landingPage'
import { Routes, Route,BrowserRouter } from 'react-router'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App