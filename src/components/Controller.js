import React, { useState } from 'react'
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import portfolio from './portfolio';

const Controller = () => {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () =>{
        if(currentPage==='Home'){
            return<Home/>;
        }
        if(currentPage==='About'){
            //About
        }
        if(currentPage==='Portfolio'){
            //return portfolio
        }
        if(currentPage==='Contact'){
            //return Contact
        }
        if(currentPage==='Resume'){
            //return Resume
        }
    }

    return (
        <>
        <Navbar/>
        </>
    )
}

export default Controller;
