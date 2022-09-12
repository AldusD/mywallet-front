import { useState, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Styled from "styled-components";
import axios from "axios";

import UserContext from '../contexts/UserContext';
import logo from '../assets/logo.png';
import Form from "./Form";

const LoginPage = () => {
    // State Variables
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    // Logic
    const { API } = useContext(UserContext);
    const navigate = useNavigate()

    const updateForm = e => setForm({ ...form, [e.target.name]: e.target.value});

    const login = async click => {
        click.preventDefault();
        try {
            const login = await axios.post(`${API}/login`, { email: form.email, password: form.password });
            console.log(login.data)
            
            localStorage.setItem("token", login.data.token);
            localStorage.setItem("id", login.data.id);
            localStorage.setItem("name", login.data.name);
            
            navigate("/home");
        } catch (error) {
            alert(error.message)
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
