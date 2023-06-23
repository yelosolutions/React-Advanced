import React from 'react';
// react router(use Routes instead of )
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// pages
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';
// navbar
import Navbar from './Navbar';
const ReactRouterSetup = () => {
    return (
        <Router>
            <Navbar/>
            {/**In react-router-dom v6 and above, use 'Routes' instead of 'Switch' */}
            <Routes>
                {/**
                 * When rendering a Home component on the "/" path, remove the 
                 * extraneous <Home /> component. In using react-router-dom v6, 
                 * the Route components no longer render components via a render or component prop, 
                 * they now render components as JSX on the element prop.
                 */}
                <Route exact path='/' element={<Home/>} />
                <Route path='about' element={<About/>} />
                <Route path='people' element={<People/>}>
                    <Route path='person' element={<Person/>} />
                </Route>
                <Route path='*' element={<Error/>} />
            </Routes>
        </Router>
    );
};

export default ReactRouterSetup;