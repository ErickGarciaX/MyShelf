import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import LogInPage from '../Pages/logIn/logInPage';
import RegisterPage from '../Pages/logIn/registerPage';
import HomePage from '../Pages/homePage';

export default function AppRouter() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigate to={"/login"}/>} />
                <Route path='/login' element={<LogInPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/home' element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );

}