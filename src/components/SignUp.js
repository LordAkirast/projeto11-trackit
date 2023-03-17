import axios from "axios";
import { useContext, useState } from "react";
import { BrowserRouter, routes, route, Form, Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from './images/Logo.png';
import Visibility from './images/visibility.png'
import Invisibility from './images/visibility_off.png'
import UserContext from "./contexts/UserPhoto";

export default function SignUp({seturl}) {
    const [login, setlogin] = useState('')
    const [password, setpassword] = useState('')
    const [name, setname] = useState('')
    const [photo, setphoto] = useState('')
    const [showPass, setshowPass] = useState(1)
    const Navigate = useNavigate()

    const {user} = useContext(UserContext)






    return (
        <HomeDiv>
            <ImgLogo src={Logo} alt="Logo"></ImgLogo>


            <Forms onSubmit={(e) => {
                e.preventDefault();
                Signup();
            }}>

                <input required={true} onChange={e => setlogin(e.target.value)} id='login' type='email' value={login} placeholder='Email' />
                <p>
                    <input required={true} onChange={e => setpassword(e.target.value)} id='password' type={showPass === 1 ? 'password' : 'text'} value={password} placeholder='Senha' />
                    <Visible onClick={showPassword} src={showPass === 1 ? Visibility : Invisibility} alt="Logo"></Visible>
                </p>
                <input required={true} onChange={e => setname(e.target.value)} id='name' type='text' value={name} placeholder='Nome' />
                <input required={true} onChange={e => setphoto(e.target.value)} id='photo' type='url' value={photo} placeholder='Foto' />
                <button id="button" type="submit">Entrar</button>
            </Forms>

        </HomeDiv>
    )

    function Signup() {
        const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up'
        const promise = axios.post(url,
            {
                email: login,
                name: name,
                image: photo,
                password: password
            })

        promise.then((res) => {
            console.log(res.data)
            alert('Usuário Cadastrado!')
            setlogin('')
            setname('')
            setpassword('')
            setphoto('')
            seturl(photo)
            Navigate('/')
        })
        promise.catch((err) => {
            if (err.response.status === 409) {
                alert('Usuário já cadastrado!')
            }
            console.log(err.response.data)
            alert('Ocorreu um erro ao cadastrar!')
        })
    }

    function showPassword() {
        if (showPass === 0) {
            setshowPass(1)
        } else {
            setshowPass(0)
        }
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

 p{
    margin:0px;
 }
`

const ImgLogo = styled.img`
    width: 180px;
    height: 170px;
`

const Visible = styled.img`
    width: 20px;
    height: 20px;
    cursor: pointer;

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
    color: black;
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