import axios from "axios";
import { BrowserRouter, routes, route } from "react-router-dom";
import styled from "styled-components";
import Logo from '../images/Logo.png';



export default function Home() {
    return (
        <HomeDiv>
            <img src={Logo} alt="Logo"></img>
        </HomeDiv>
    )

}


const HomeDiv = styled.div`
width: 375;
height: 667;
background-color: aqua;
`