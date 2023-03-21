import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Styled from 'styled-components';
import axios from 'axios';

import UserContext from '../contexts/UserContext';

const Home = () => {
    // State Variables
    const [transfers, setTransfers] = useState([]);
    const [balance, setBalance] = useState(0);
    const [status, setStatus] = useState('#03AC00');
    const [refresh, setRefresh] = useState(false);
    // Logic
    const {API, setOperation } = useContext(UserContext);
    const navigate = useNavigate();

    const newTransfer = operation => {
        setOperation(operation);
        navigate("/newTransfer");
    }

    const calculateBalance = transactions => {
        let sum = 0;
        for(let i = 0; i < transactions.length; i++) {
            if(transactions[i].type === 'receive') sum +=Number(transactions[i].value);
            if(transactions[i].type === 'pay') sum -=Number(transactions[i].value);
        }
        setBalance(sum);
        (sum >= 0) ? setStatus('#03AC00') : setStatus('#C70000');
    }

    const deleteTransaction = async transactionId => {
        const confirmation = window.confirm('This will delete this transaction, are you sure?')
        if(!confirmation) return;
        
        const headers = { Authorization: `Bearer ${ localStorage.getItem("token") }` };
        const data = { transferId: transactionId };
        try {
            const transferDelete = await axios.delete(`${API}/transfer/${localStorage.getItem('id')}`, { headers, data });
            setRefresh(!refresh);
        } catch (error) {
            alert(error.message);
        }
    }
    
    const logout = async click => {
        const headers = { Authorization: `Bearer ${ localStorage.getItem("token") }` };
                
        try {
            const logout = await axios.post(`${API}/logout/${localStorage.getItem("id")}`, {}, { headers });
        } catch (error) {
            alert(error.message);
            return;
        }
        return navigate("/");
    }

    useEffect(async () => {
        const headers = { 
            Authorization: `Bearer ${ localStorage.getItem("token") }`
        }

        try {
            const getTransfers = await axios.get(`${API}/transfer/${ localStorage.getItem('id') }`, { headers }); 
            setTransfers([...getTransfers.data.transfers]);
            calculateBalance([...getTransfers.data.transfers])
        } catch (error) {
            alert(error.message);
        }
        
        
    }, [refresh])

    // UI
    return (
        <SHome>

        <Header>
            <h2>Welcome back, { localStorage.getItem("name") }</h2>
            <ion-icon onClick={logout} name="exit"></ion-icon>
        </Header>
        
        { (transfers.length == 0) ? 
        <Box><p>No transactions yet</p></Box> 
        : 
        <Transactions>
            <div>
                {
                transfers.map((t, i) => {
                    const color = (t.type === 'receive') ? '#03AC00' : '#C70000';
                    return (
                        <Transfer key={i}>
                            <div>
                                <Date>{t.date}</Date>
                                <Link to={`/changeTransfer/${t._id}/${t.type}`} ><span>{t.description}</span></Link>
                            </div>
                            <div>
                                <Value color={color} >{t.value}</Value>
                                <DeleteIcon onClick={() => deleteTransaction(t._id)} >x</DeleteIcon>
                            </div>
                        </Transfer>
                    )
                }
            )
            }
            </div>
            <Balance color={ status }><span className='bold' >Balance</span> <span className='value' >{balance}</span></Balance>
        </Transactions>
        }

        <Footer>
            <div onClick={() => newTransfer('Cash In') } >
                <p>New cash in</p> 
                <ion-icon name="add-circle-outline"></ion-icon>
            </div>
            <div onClick={() => newTransfer('Cash Out') } >
                <p>New cash out</p>
                <ion-icon name="remove-circle-outline"></ion-icon>    
            </div>
        </Footer>
        
        </SHome>
    );
}

const Balance = Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0.4rem;
    margin-bottom: 1rem;
    font-size: 1rem;

    .bold {
        font-weight: bold;
        color: black;
    }

    .value {
        color: ${props => props.color};
    }
`;

const Value = Styled.span`
    color: ${props => props.color};
`;

const Date = Styled.span`
    color: grey;
    margin-right: 0.4rem;
    font-size: 1rem;
`;

const Transfer = Styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.3rem 0.3rem 0 0.3rem;

    a {
        text-decoration: none;
        color: black;
    }

    span {
        font-family: 'Raleway';
        font-size: 1rem;
    }
`

const Footer = Styled.div`
    display: flex;
    width: 90%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    left: 5%;
    z-index: 1;
    margin-top: 25vh;

    div {
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: space-between;
        height: 20vh;
        width: 100%; 
        border-radius: 20px;
        margin: 0 0.2rem 6% 0.2rem;
        background-color: #A328D6;


        ion-icon {
            margin: 3vh 0.2rem 0 0.2rem;
            font-size: 1.6rem;
            color: white;
            margin-left: 0.4rem;
            margin-bottom: 0.6vh;
        }
        

        p {
            font-family: "Raleway";
            font-size: 1.2rem;
            font-weight: 700;
            color: white;
            margin-left: 0.4rem;
        }
    }
`

const Box = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 90%;
    min-height: 56vh;
    border-radius: 20px;

p {
        font-size: 1.4rem;
        font-family: 'Raleway';
        color: grey;
    }
`;

const SHome = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Header = Styled.div`
    max-width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 6%;
    padding: 0 6%;

    ion-icon {
        font-size: 2.4rem;
        margin-left: 2rem;
        color: white;
    }

    h2 {
        font-family: 'Raleway';
        color: white;
        font-size: 1.4rem;
    }

`;

const Transactions = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    width: 80%;
    min-height: 56vh;
    
    border-radius: 20px;
    
    p {
        font-size: 1.4rem;
        font-family: 'Raleway';
        color: grey;
        position: absolute;
        left: 36%;
        top: 200px;
    }
`

const DeleteIcon = Styled.span`
    font-size: 1.4rem;
    font-family: 'Raleway';
    color: #AAAAAAAA;
    margin: 0 0.8rem;
`;

export default Home;

