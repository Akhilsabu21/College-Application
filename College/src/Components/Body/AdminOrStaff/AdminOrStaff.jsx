import React from 'react'
import './AdminOrStaff.css'
import { Link } from 'react-router-dom'

const AdminOrStaff = () => {
    return (
        <div className='container-fluid adminorstaffHome'>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link head-link active" aria-current="page" href="#">College Logo</a>
                </li>
            </ul>
                <h1 className='bold-heading'>Welcome To College Name</h1>
            <div className="heads">
                <div className="head-body">
                    <div className="left-box">
                        <img src="https://img.freepik.com/free-photo/red-buildings-households_1127-2024.jpg?w=1060&t=st=1702273264~exp=1702273864~hmac=af8ff24d270d4ecf79751de3fe03075b9a8b861a6af9fa923d187555a49cdee3" alt="" />
                        <div className="left-box-body">
                            <div className="left-h-btns">
                                <h1>Admin Login</h1>
                                <Link to={'/login'}><button>Login</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="right-box">
                        <img src="https://img.freepik.com/free-photo/bourse-building-philadelphia_268835-4934.jpg?w=1060&t=st=1702273605~exp=1702274205~hmac=a76abd7e76d51fd6cbc2af0cdfae47cfb96d1998f79dd92a91e98ae048757887" alt="" />
                        
                        <div className="right-box-body">
                            <div className="right-h-btns">
                                <h1>Staff Login</h1>
                                <Link to={'/stafflogin'}><button>Login</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminOrStaff
