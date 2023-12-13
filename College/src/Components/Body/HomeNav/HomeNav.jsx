import React, { useEffect, useState } from 'react';
import './HomeNav.css';
import { Link, useNavigate } from 'react-router-dom';

const HomeNav = () => {
    return (
        <div>
            <nav id="navbar">
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <div className="container">
                        <Link to={'/'} className="navbar-brand" href="#">
                            <h1>College</h1>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#Home">Home
                                        <span className="sr-only"> (current)</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#Contact">Contact</a>
                                </li>
                            </ul>
                            <div className="login-btn ms-auto">
                                {/* <Link to={'/studentlogin'} className='student-login'>Student Login</Link> */}
                                <div className="wrapper">
                                    <Link to={'/studentlogin'} className='student-login'>Student Login</Link> 
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </nav>



        </div>
    )
}

export default HomeNav
