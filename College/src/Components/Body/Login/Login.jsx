import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import SmallNav from '../SmallNav/SmallNav';

const Login = () => {
    const navigate=useNavigate()
    const [val,setVal]=useState({})

    const inputValues=(e)=>{
        setVal((pre)=>{
            return {...pre,[e.target.name]:e.target.value};
        })
    }
    const submit=async(e)=>{
        e.preventDefault();
        // console.log(val);
        axios.post("http://localhost:3001/api/login",val)
        .then((res)=>{
            alert(res.data.msg);
            localStorage.setItem("admintoken",JSON.stringify(res.data.token))
            navigate('/admin')
        }).catch((error)=>{
            alert(error.response.data.msg);
        })
        
    }
    return (
            <div>
                <SmallNav />
                




                <div className="container-fluid">
                    <div className="row main-content bg-success text-center">
                        <div className="col-md-4 text-center company__info">
                            {/* <span className="company__logo"><h2><span className="fa fa-android"></span></h2></span> */}
                        <h4 className="company_title">College logo</h4>
                        </div>
                        <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
                            <div className="container-fluid">
                                <div className="row">
                                    <h2>Log In</h2>
                                </div>
                                <div className="row">
                                    <form control="" className="form-group">
                                        <div className="row">
                                            <input onChange={inputValues} type="text" name="UserName" id="username" className="form__input" placeholder="Username" />
                                        </div>
                                        <div className="row">
                                            <input  onChange={inputValues} type="password" name="Password" id="password" className="form__input" placeholder="Password" />
                                        </div>
                                        <div className="row sign-btn">
                                            <button onClick={submit}  className="btn">Submit</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="row">
                                    <p>Don't have an account? <Link to={'/signin'}>Register Here</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Login
