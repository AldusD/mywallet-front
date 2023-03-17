import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {styled, createGlobalStyle} from 'styled-components';
import { useState } from 'react';

import './assets/fonts.css';
import UserContext from "./contexts/UserContext";
import LoginPage from "./components/LoginPage";
import SignupPage from './components/SignupPage';
import Home from './components/Home';
import TransferPage from './components/TransferPage';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #8c10bf;
    }

`

const App = () => {

    const API = 'http://localhost:5000';
    let transfers = new Array;
    const [operation, setOperation] = useState('');

    return (
        <>
            <UserContext.Provider value={ { API, transfers, operation, setOperation } }>
                <GlobalStyle />
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={ <LoginPage /> } />
                        <Route path='/signup' element={ <SignupPage /> } />
                        <Route path='/home' element={ <Home /> } />
                        <Route path="/newTransfer" element={ <TransferPage transferOperation='create' />} />
                        <Route path="/changeTransfer/:transferId/:type" element={ <TransferPage transferOperation='change' />} />
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </>
    )
}
export default App;

