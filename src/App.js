import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./components/Home";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}