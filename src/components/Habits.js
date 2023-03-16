import axios from "axios";
import { useState } from "react";
import { BrowserRouter, routes, route, Form } from "react-router-dom";
import styled from "styled-components";

export default function Habits() {

    return (
        <>
            <NavBar>trackit <img src="a" alt="a"></img></NavBar>
            <HomeDiv>
                <HabitsDiv>
                    <div>Meus Habitos +</div>
                    <p>Você não tem nenhum habito cadastrado</p>
                </HabitsDiv>

            </HomeDiv>
            <Footer>Habitos | Icone | Histórico</Footer>
        </>

    )
}

const NavBar = styled.div`
width: 375px;
height: 75px;
background-color: #126BA5;
justify-content: space-around;
display: flex;
color: white;
position: fixed;
top: 0;

`

const HomeDiv = styled.div`
width: 375px;
height: 667px;
background-color: aqua;
display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: flex-start;

`

const HabitsDiv = styled.div`
margin-top: 75px`

const Footer = styled.div`
width: 375px;
height: 75px;
`

