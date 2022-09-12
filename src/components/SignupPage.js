import { useState, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Styled from "styled-components";
import axios from "axios";

import UserContext from '../contexts/UserContext';
import Form from "./Form";
import logo from '../assets/logo.png';

const SignupPage = () => {
        // State Variables
        const [form, setForm] = useState({
            name: '',
            email: '',
            password: '',
            confirmation: ''
        });
    
        // Logic
        const { API } = useContext(UserContext); 
        const navigate = useNavigate();

        const updateForm = e => setForm({ ...form, [e.target.name]: e.target.value});
        
        const signup = async click => {
            click.preventDefault();
            
            try {
                const signup = await axios.post(`${API}/signup`,form);
                console.log(signup.data)
                navigate('/');
            } catch (error) {
                console.error(error);
            }
        }
        // UI
    return (
        <SSignupPage>
        <Space />
        <Header><img src={ logo } /></Header>
        <Form>
            <input name="name" type='text' placeholder="Name" onChange={e => updateForm(e) } value={form.name}></input>
            <input name="email" type="email" placeholder="Email" onChange={ e => updateForm(e) } value={form.email}></input> 
            <input name="password" type="password" placeholder="Password" onChange={ e => updateForm(e) } value={form.password}></input>
            <input name="confirmation" type="password" placeholder="Confirm your password" onChange={ e => updateForm(e) } value={form.confirmation}></input> 
            <button onClick={ e => signup(e) }>Sign-up</button>
        </Form>
        <Link to="/" ><p>Already got an account? Sign-in here.</p></Link> 
        
        </SSignupPage>
    )
}

const SSignupPage = Styled.div`
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
    margin-bottom: 20%;

`
export default SignupPage;