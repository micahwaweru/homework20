import React from 'react'

export const Navbar = ({ currentPage, handlePageChange }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
        <a className="navbar-brand" href="#">Micah Waweru</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav justify-content-end">

            <li className="nav-item">
              <a className="nav-link" href="#about"onClick={()=>handlePageChange('About')}className={currentPage==='About'?'nav-link active':'nav-link'}>About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio"onClick={()=>handlePageChange('Portfolio')}className={currentPage==='Portfolio'?'nav-link active':'nav-link'}>Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact"onClick={()=>handlePageChange('Contact')}className={currentPage==='Contact'?'nav-link active':'nav-link'}>Contact</a>
            </li>

           

          </ul>
          
        </div>
        </div>
      </nav>
    )}
export default Navbar;