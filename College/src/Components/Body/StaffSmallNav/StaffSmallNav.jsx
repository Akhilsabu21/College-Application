import React from 'react';
import './StaffSmallNav.css'
import { Link } from 'react-router-dom';

const StaffSmallNav = () => {
  return (
    <div>
      <nav className="nav container-fluid">
                <div className="container d-flex justify-content-between">
                    <div className="nav-left">
                        <div className="nav">
                            <Link to={'/adminorstaff'} className="nav-link nav-links active" href="#">College Logo</Link>
                        </div>
                    </div>
                </div>
            </nav>
    </div>
  )
}

export default StaffSmallNav
