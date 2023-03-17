import axios from "axios";
import { useContext, useState } from "react";
import { BrowserRouter, routes, route, Form } from "react-router-dom";
import styled from "styled-components";
import UserContext from "./contexts/UserPhoto";



export default function Habits() {

    const { user } = useContext(UserContext)
    const [create, setcreate] = useState(0)
    const weekday = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']


    return (
        <>
            <NavBar>trackit <img src={user} alt="a"></img></NavBar>
            <HomeDiv>
                <HabitsDiv>
                    <MyHabits>
                        <div>Meus Habitos</div> <p onClick={creation}>+</p>
                    </MyHabits>
                    {create === 1 ? <HabitCreate>
                        <Forms onSubmit={(e) => {
                            e.preventDefault();
                        }}>

                            <input required={true} id='habitName' type='text' placeholder='Nome do Hábito' />
                            <div>{weekday.map(week => <p>{week}</p>)}</div>
                            <Buttons>
                                <button>Cancelar</button> <button>Salvar</button>
                            </Buttons>

                        </Forms>
                    </HabitCreate> : ''}
                    <p>Você não tem nenhum hábito <br /> cadastrado ainda. Adicione um hábito <br /> para começar a trackear!</p>

                </HabitsDiv>

            </HomeDiv>
            <Footer>Habitos | <p>Hoje</p> | Histórico</Footer>
        </>

    )


    function creation() {
        create === 0 ? setcreate(1) : setcreate(0)

    }
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


const HabitCreate = styled.div`
width: 340px;
height: 180px;
background-color: white;
display: flex;
justify-content: center;
align-items: baseline;
`


const Forms = styled.form`
input{
    width: 303px;
    height: 45px;
    margin-top: 18px;
}

div {
    display: flex;
    flex-direction: row;
}

p {
    width: 30px;
    height: 30px;
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}

`

const Buttons = styled.div`
background-color: white;
justify-content: space-around;
`


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
    cursor: pointer;
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

