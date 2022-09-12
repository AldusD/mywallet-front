import Styled from "styled-components";

const Form = props => {
    return(
        <Sform>
            { props.children }
        </Sform>
    )
}

const Sform = Styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
        box-sizing: border-box;
        width: 88%;
        height: 3rem;
        border-radius: 8px;
        border: none;
        margin: 0.4rem 0;

        font-size: 1.3rem;
        font-family: 'Raleway'
        font-weight: 400;
        padding-left: 1.6rem;
    }

    input::placeholder {
        text-align: left;
        font-size: 1.3rem;
        font-family: 'Raleway'
        font-weight: 400;
        color: #555;
    }

    button {
        width: 88%;
        height: 3rem;
        border-radius: 8px;
        border: none;
        margin: 0.4rem 0;
        padding: 0 2rem;

        font-size: 1.5rem;
        font-weight: 700; 
        font-family: 'Raleway';

        background-color: #A328D6;
        color: white;
    }


`;

export default Form;