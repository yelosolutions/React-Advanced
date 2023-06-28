import React from 'react'
// react router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// navbar
import Navbar from './Navbar';
// pages(components)
import Error from './Error';
import Home from './Home';
import About from './About';
import People from './People';
import Person from './Person';

const ReactRouterSetup = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='about' element={<About/>} />
                <Route path='people' element={<People/>} />
                <Route path='people/person' element={<Person/>} />
            </Routes>
        </Router>
    )
}

export default ReactRouterSetup;