import axios from "axios";
import { useState } from "react";
import { BrowserRouter, routes, route, Form, } from "react-router-dom";
import styled from "styled-components";
import Logo from './images/Logo.png';
import { Link } from "react-router-dom";


export default function Home() {
    const [login, setlogin] = useState('')
    const [password, setpassword] = useState('')
    return (
        <HomeDiv>
            <ImgLogo src={Logo} alt="Logo"></ImgLogo>

            <Forms onSubmit={Login}>
                <input onChange={e => setlogin(e.target.value)} id='login' type='text' value={login} placeholder='Usuário' />
                <input onChange={e => setpassword(e.target.value)} id='password' type='text' value={password} placeholder='Senha' />

                <button id="button" type="submit">Entrar</button>
            </Forms>
            <Link to='/cadastro'>
                <a>Não tem uma conta? Cadastre-se</a>
            </Link>
        </HomeDiv>
    )

    function Login() {
        alert('Entrou')
    }

}


const HomeDiv = styled.div`
width: 375px;
height: 667px;
background-color: aqua;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

 a{
    color: #52B6FF
 }
`

const ImgLogo = styled.img`
    width: 180px;
    height: 170px;
`

const Forms = styled.form`
    display: flex;
    flex-direction: column;

    input {
    width: 303px;
    height: 45px;
    font-size: 19px;
    border-color: #d4d4d4;
    border-radius: 5px;
    border-width: 1px;
    margin-top: 6px;
    background-color: white;
    color: #DBDBDB;

    &:first-child {
      margin-top: 30px;
    }
  }
    button{
        width: 311px;
        height: 45px;
        font-size: 19px;
        border-radius: 5px;
        border-width: 1px;
        margin-top: 6px;
        margin-bottom: 25px;
        background-color: #52B6FF;
        color: white;
    }
`