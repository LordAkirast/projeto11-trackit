import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Habits from "./components/Habits";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cadastro" element={<SignUp />} />
                <Route path="/habitos" element={<Habits />} />
            </Routes>
        </BrowserRouter>
    )
}


