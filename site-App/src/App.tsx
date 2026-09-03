import LandingPage from './pages/landingPage'
import { Routes, Route,BrowserRouter } from 'react-router'
import Login from './pages/login'
import Register from './pages/register'
import OTP from './pages/OTP'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/verify' element={<OTP/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App