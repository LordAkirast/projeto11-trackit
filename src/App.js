import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Habits from "./components/Habits";
import UserContext from "./components/contexts/UserPhoto";
import { useState } from "react";


export default function App() {
    const [url, seturl] = useState('')
    return (
        <UserContext.Provider value={{user: url}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cadastro" element={<SignUp seturl={seturl} />} />
                    <Route path="/habitos" element={<Habits />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}




