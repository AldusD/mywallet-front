import { useState } from "react";
import { Link } from 'react-router-dom';
import Styled from "styled-components";
import axios from "axios";

import logo from '../assets/logo.png';
import Form from "./Form";

const LoginPage = () => {
    // State Variables
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    // Logic
    const updateForm = e => setForm({ ...form, [e.target.name]: e.target.value});

    const login = click => {
        click.preventDefault();
        try {
            const login = axios.post()
        } catch (error) {
            console.error(error);
        }
    }
    
    // UI
    return (
        <SLoginPage>
        <Space />
        <Header><img src={ logo } /></Header>
        <Form>
            <input name="email" type="email" placeholder="Email" onChange={ e => updateForm(e) } value={form.email}></input> 
            <input name="password" type="password" placeholder="Password" onChange={ e => updateForm(e) } value={form.password}></input> 
            <button onClick={ e => login(e) }>Login</button>
        </Form>
        <Link to="/signup" ><p>Does not have an account yet? Sign-up here!</p></Link> 
        
        </SLoginPage>
    );
}

const SLoginPage = Styled.div`
    p {
        color: white;
        font-family: 'Raleway';
        font-size: 1.3rem;
        text-align: center;
    }

    a {
        text-decoration: none;
    }
`

const Header = Styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-itens: center;

    img {
        width: 44%;
        margin-bottom: 6%;
    }
`
const Space = Styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 50%;

`
export default LoginPage;
