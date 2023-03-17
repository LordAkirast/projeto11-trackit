import axios from "axios";
import { useContext, useState } from "react";
import { BrowserRouter, routes, route, Form } from "react-router-dom";
import styled from "styled-components";
import UserContext from "./contexts/UserPhoto";



export default function Habits() {

    const {user} = useContext(UserContext)


    return (
        <>
            <NavBar>trackit <img src={user} alt="a"></img></NavBar>
            <HomeDiv>
                <HabitsDiv>
                    <MyHabits>
                        <div>Meus Habitos</div> <p>+</p>
                    </MyHabits>
                    <p>Você não tem nenhum hábito <br/> cadastrado ainda. Adicione um hábito <br/> para começar a trackear!</p>

                </HabitsDiv>

            </HomeDiv>
            <Footer>Habitos | <p>Hoje</p> | Histórico</Footer>
        </>

    )
}

const NavBar = styled.div`
width: 375px;
height: 75px;
background-color: #126BA5;
justify-content: space-around;
align-items: center;
display: flex;
color: white;
position: fixed;
top: 0;
font-family: 'Playball', cursive;
font-size: 38px;

img {
    width: 51px;
    height: 51px;
    border-radius: 100px;
}

`

const HomeDiv = styled.div`
width: 375px;
height: 667px;
background-color: #F2F2F2;
display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: flex-start;
`

const HabitsDiv = styled.div`
margin-top: 75px;

p {
    margin-left: 15px;
    color: #666666;
}`

const MyHabits = styled.div`
display: flex;
justify-content: space-around;
align-items: baseline;
font-family: 'Lexend Deca', sans-serif;
width: 375px;
color: #126BA5;
font-size: 20px;


p{
    width: 40px;
    height: 35px;
    background-color: #52B6FF;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    font-size: 26px;
    display: flex;
    margin-left: 15px;
    border-radius: 5px;
}
`


const Footer = styled.div`
width: 375px;
height: 75px;
background-color: white;
justify-content: space-around;
align-items: center;
display: flex;
color: white;
position: fixed;
bottom: 0;
font-family: 'Lexend Deca', sans-serif;
font-size: 20px;
color: #52B6FF;

p {
    background-color: red;
    width: 91px;
    height: 91px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 60px;
}
`

