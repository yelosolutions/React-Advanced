import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './Navbar';

import Error from './Error';
import Home from './Home';
import About from './About';
import People from './People';
import Person from './Person';

const Index = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='about' element={<About/>} />
            </Routes>
        </Router>
    )
}

export default Index;