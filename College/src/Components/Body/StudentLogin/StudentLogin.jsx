import React, { useState } from 'react';
import './StudentLogin.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const StudentLogin = () => {
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
        axios.post("http://localhost:3001/api/studentlogin",val)
        .then((res)=>{
            alert(res.data.msg);
            localStorage.setItem("id",JSON.stringify(res.data))
            navigate('/studenthome')
        }).catch((error)=>{
            alert(error.response.data.msg);
        })
        
    }
    return (
        <div>


            <div className="container-fluid">
                <div className="row main-content bg-success text-center">
                    <div className="col-md-4 text-center company__info">
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
                                        <input onChange={inputValues} type="text" name="StudentId" id="StudentId" className="form__input" placeholder="StudentId" />
                                    </div>
                                    <div className="row">
                                        <input onChange={inputValues} type="text" name="dob" className="form__input" placeholder="Date Of Birth" />
                                    </div>
                                    <div className="row sign-btn">
                                        <button onClick={submit} className="btn">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

  )
}

export default StudentLogin
