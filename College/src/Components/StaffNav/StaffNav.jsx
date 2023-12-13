import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const StaffNav = ({staff}) => {
    const[cnt,setCnt]=useState(0)
    const logout=()=>{
        setCnt(cnt+1)
        localStorage.removeItem('stafftoken');
    useEffect(()=>{},[cnt])
    }
    return (
        <div>
            <div className="nav-background">
                <img src="https://images.unsplash.com/photo-1599725427295-6ed79ff8dbef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <nav className="navbar nav-bar navbar-expand-lg bg-light">
                <div className="container nav-container py-2">
                    <Link className="navbar-brand navbar-links" to={'/staffhome'}>College logo</Link>
                    <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                {
                                    !staff ? <></> : <Link to={'/staff'} className="nav-link active navbar-links">{staff}</Link>
                                }
                            </li>
                            <li className="nav-item">
                                {
                                    !staff ? <Link className="nav-link active  navbar-links" aria-current="page" href="#" to={'/stafflogin'}>Log in</Link> :
                                        <Link to='/adminorstaff' className="nav-link active  navbar-links" onClick={logout} aria-current="page" >Logout</Link>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="nav-btn">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit Eligendi perferendis </h1>
                <button>Explore</button>
            </div>
        </div>
    )
}

export default StaffNav
