import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/dashboard' element={<Dashboard/>}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    );
}

export default App;
