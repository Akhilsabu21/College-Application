import React, { useEffect, useState } from 'react';
import './Nav.css'
import { Link, useNavigate } from 'react-router-dom';

const Nav = ({admin}) => {
    const[cnt,setCnt]=useState(0)
    // console.log(admin);
    const logout=()=>{
        setCnt(cnt+1)
        localStorage.removeItem('admintoken');
        // navigate("/",{state:{asd:'sasas'}})
    useEffect(()=>{},[cnt])
    }
    return (
        <div>
            <div className="nav-background">
                <img src="https://images.unsplash.com/photo-1599725427295-6ed79ff8dbef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <nav className="navbar nav-bar navbar-expand-lg bg-light">
                <div className="container nav-container py-2">
                    <Link className="navbar-brand navbar-links" to={'/'}>College logo</Link>
                    <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                            {
                                !admin?<></>:<Link to={'/admin'} className="nav-link active navbar-links">{admin}</Link>
                            }
                            </li>
                            <li className="nav-item">
                            {
                                !admin?<Link className="nav-link active  navbar-links" aria-current="page" href="#" to={'/login'}>Log in</Link>:
                                <Link to='/adminorstaff' className="nav-link active  navbar-links" onClick={logout} aria-current="page" >Logout</Link>
                            }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="nav-btn">
                <h1><span className='nav-highlight'>Greatness. Inspired.</span>
Located in the vicinity of Bangalore’s wilderness treasure, The Bannerghatta National Park</h1>
                <button>
View Our Campus</button>
            </div>
        </div>
    )
}

export default Nav
