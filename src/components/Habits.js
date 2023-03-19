import axios from "axios";
import { useContext, useState } from "react";
import { BrowserRouter, routes, route, Form } from "react-router-dom";
import styled from "styled-components";
import UserContext from "./contexts/UserPhoto";
import TokenContext from "./contexts/Token";
import { useEffect } from "react";



export default function Habits({ token }) {

    const { user } = useContext(UserContext)
    const [create, setcreate] = useState(0)
    const weekday = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
    const [habitName, sethabitName] = useState('')
    const [weekSelection, setweekSelection] = useState([])
    const [habitCount, sethabitCount] = useState(0)
    const [habitsArray, sethabitsArray] = useState([])
    


    return (
        <>
            <NavBar onClick={debug}>trackit <img src={user} alt="a"></img></NavBar>
            <HomeDiv>
                <HabitsDiv>
                    <MyHabits>
                        <div>Meus Habitos</div> <p onClick={creation}>+</p>
                    </MyHabits>

                    {create === 1 ? <HabitCreate>

                        <Forms onSubmit={(e) => {
                            e.preventDefault();
                        }}>

                            <input required={true} onChange={e => sethabitName(e.target.value)} value={habitName} id='habitName' type='text' placeholder='Nome do Hábito' />
                            <div>{weekday.map((week, index) => <p key={index} onClick={() => setweekSelection([...weekSelection, index === 0 ? 7 : index])}>{week}</p>)}</div>

                            <Buttons>
                                <button onClick={creation}>Cancelar</button> <button onClick={createHabit}>Salvar</button>
                            </Buttons>

                        </Forms>
                    </HabitCreate> : ''}


                    {habitCount === 1 ?
                        habitsArray.map((habit) => (
                            <HabitCreated onDoubleClick={(event) => deleteHabit(event, habit.id)} key={habit.id}>
                                <p>{habit.name}</p>
                                <PWeekText>
                                    {habit.days.includes(7) ? <p style={{ backgroundColor: '#CFCFCF', color: 'white', borderColor: '#CFCFCF', width: '30px', height: '30px', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>D</p> : <p>D</p>}
                                    {habit.days.includes(1) ? <p style={{ backgroundColor: '#CFCFCF', color: 'white', borderColor: '#CFCFCF', width: '30px', height: '30px', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>S</p> : <p>S</p>}
                                    {habit.days.includes(2) ? <p style={{ backgroundColor: '#CFCFCF', color: 'white', borderColor: '#CFCFCF', width: '30px', height: '30px', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>T</p> : <p>T</p>}
                                    {habit.days.includes(3) ? <p style={{ backgroundColor: '#CFCFCF', color: 'white', borderColor: '#CFCFCF', width: '30px', height: '30px', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Q</p> : <p>Q</p>}
                                    {habit.days.includes(4) ? <p style={{ backgroundColor: '#CFCFCF', color: 'white', borderColor: '#CFCFCF', width: '30px', height: '30px', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Q</p> : <p>Q</p>}
                                    {habit.days.includes(5) ? <p style={{ backgroundColor: '#CFCFCF', color: 'white', borderColor: '#CFCFCF', width: '30px', height: '30px', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>S</p> : <p>S</p>}
                                    {habit.days.includes(6) ? <p style={{ backgroundColor: '#CFCFCF', color: 'white', borderColor: '#CFCFCF', width: '30px', height: '30px', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>S</p> : <p>S</p>}
                                </PWeekText>
                            </HabitCreated>
                        )) : <p>Você não tem nenhum hábito <br /> cadastrado ainda. Adicione um hábito <br /> para começar a trackear!</p>
                    }


                </HabitsDiv>

            </HomeDiv>
            <Footer>Habitos | <p>Hoje</p> | Histórico</Footer>
        </>

    )


    function creation() {
        create === 0 ? setcreate(1) : setcreate(0)
        sethabitName('')
        setweekSelection([])

    }

    function debug() {
        console.log(weekSelection)
        console.log(habitName)
        getHabits()
        sethabitCount(habitCount === 0 ? 1 : 0)
    }

    function getHabits() {
        const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'
        const TOKEN = `${token}`
        const config = {
            headers: {
                Authorization: `Bearer ${TOKEN}`
            }
        }
        const promise = axios.get(url,
            config
        );

        promise.then((res) => {
            alert('Requisição com SUcesso')
            sethabitsArray(res.data)
            console.log(res.data)

        })
        promise.catch((err) => {
            if (err.response.status === 409) {
                alert('Usuário já cadastrado!')
            }
            console.log(err.response.data.details)
            alert('Ocorreu um erro ao requisitar hábitos' + err.response.data.details)
        })
    }



    function createHabit() {
        const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'
        const TOKEN = `${token}`
        const config = {
            headers: {
                Authorization: `Bearer ${TOKEN}`
            }
        }
        const promise = axios.post(url,
            {
                name: habitName,
                days: weekSelection,
            },
            config
        );

        promise.then((res) => {
            alert('Habito Criado!')

        })
        promise.catch((err) => {
            if (err.response.status === 409) {
                alert('Usuário já cadastrado!')
            }
            console.log(err.response.data.details)
            alert('Ocorreu um erro ao cadastrar!' + err.response.data.details)
        })
    }


    function deleteHabit(event, id) {
        const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;
        const TOKEN = `${token}`;

        const config = {
          headers: {
            Authorization: `Bearer ${TOKEN}`
          }
        }

        const promise = axios.delete(url,
            config
        );

        promise.then((res) => {
            alert('Habito Deletado!')
            getHabits()

        })
        promise.catch((err) => {
            if (err.response.status === 409) {
                alert('Usuário já cadastrado!')
            }
            console.log(err.response.data.details)
            alert('Ocorreu um erro ao deletar!' + err.response.data.details)
            console.log(token)
        })
      
        
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

const PWeekText = styled.div`
display: flex;

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

const HabitCreate = styled.div`
width: 340px;
height: 180px;
background-color: white;
display: flex;
justify-content: center;
align-items: baseline;
`

const HabitCreated = styled.div`
width: 340px;
height:91px;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-bottom: 10px;
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

