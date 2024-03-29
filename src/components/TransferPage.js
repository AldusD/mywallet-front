import axios from "axios";
import Styled from "styled-components";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import Form from "./Form";
import UserContext from "../contexts/UserContext";

const TransferPage = ({ transferOperation }) => {
    const path = window.location.pathname.split('/');
    const transferId = path[2];
    const paramType = (path[3] === 'pay') ? 'Cash Out' : 'Cash In';
    
    const [form, setForm] = useState({
        value: '',
        description: '',
    });

    // Logic
    const { API, operation } = useContext(UserContext);
    const navigate = useNavigate();

    const updateForm = e => setForm({ ...form, [e.target.name]: e.target.value});
    
    const newTransfer = async click => {
        click.preventDefault();
        const headers = { Authorization: `Bearer ${ localStorage.getItem("token") }` };
        const type = (operation === 'Cash In') ? 'receive' : 'pay';
        const body = { value: form.value, description: form.description, type };

        try {
            const transfer = await axios.post(`${API}/transfer/${localStorage.getItem("id")}`, body, { headers });
            console.log(transfer);
        } catch (error) {
            alert(error.message);
        }
        navigate("/home");
    }

    const updateTransfer = async click => {
        click.preventDefault();
        const headers = { Authorization: `Bearer ${ localStorage.getItem("token") }` };
        const body = { value: form.value, description: form.description, transferId };

        try {
            const transfer = await axios.put(`${API}/transfer/${localStorage.getItem("id")}`, body, { headers });
            console.log(transfer);
        } catch (error) {
            alert(error.message);
        }
        navigate("/home");
    }

    // UI    
    return (
        <>
        <Header>{ transferOperation === 'create' ?
            <h2>New {operation}</h2> : <h2>Change {paramType}</h2> 
        }</Header>
        <Form>
            <input name="value" type="number" placeholder="Value" onChange={ e => updateForm(e) } value={form.value}></input> 
            <input name="description" type="text" placeholder="Description" onChange={ e => updateForm(e) } value={form.description}></input> 
            { transferOperation === 'create' ?
                <button onClick={ e => newTransfer(e) }>Save Transaction</button>
                :
                <button onClick={ e => updateTransfer(e) }>Save Changes</button>
            }
        </Form>
        </>
    )
}

const Header = Styled.div`
    max-width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 6%;
    padding: 0 6%;

    h2 {
        font-family: 'Raleway';
        color: white;
        font-size: 1.6rem;
    }
`

export default TransferPage;