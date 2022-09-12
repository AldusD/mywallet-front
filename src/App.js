import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {styled, createGlobalStyle} from 'styled-components';

import './assets/fonts.css';
import LoginPage from "./components/LoginPage";
import SignupPage from './components/SignupPage';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #8c10bf;
    }

`

const App = () => {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={ <LoginPage /> } />
                    <Route path='/signup' element={ <SignupPage /> } />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App;

