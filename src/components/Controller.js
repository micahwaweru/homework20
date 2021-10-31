import React, { useState } from 'react'
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Portfolio from './portfolio';
import ContactForm from './ContactForm'

export default function Controller() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () =>{

        if(currentPage==='About'){
            //About
            return<About/>;
        }
        if(currentPage==='Portfolio'){
            //return portfolio
            return<Portfolio/>;
        }
        if(currentPage==='Contact'){
            //return Contact
            return<ContactForm/>
        }
        if(currentPage==='Resume'){
            //return Resume
        }
    }

    const handlePageChange = (page)=>setCurrentPage(page)

    return (
        <>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
        {renderPage()}
        </>
    )
}


