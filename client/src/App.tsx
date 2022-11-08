import React from 'react';
import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import {Container} from "@mui/material";


const App = () => {
    return (
        <Container maxWidth="sm">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/dashboard' element={<Dashboard/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='*' element={<Navigate to="/home" replace />}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </Container>
    );
}

export default App;
