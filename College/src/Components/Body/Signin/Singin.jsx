import React, { useState } from 'react';
import './Signin.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import SmallNav from '../SmallNav/SmallNav';

const Signin = () => {
    const [val,setVal]=useState({});
    const navigate=useNavigate();

    const inputValues=(e)=>{
        console.log(e.target.value);
        setVal((pre)=>{
            return {...pre,[e.target.name]:e.target.value};
        })
        
    }
    const profile=async(e)=>{
        const Profile =await convertToBase64(e.target.files[0])
        setVal((pre)=>{
            return {...pre,[e.target.name]:Profile}
        })
    }
    const submit=async(e)=>{
        e.preventDefault();
        console.log(val);
        const res=await axios.post("http://localhost:3001/api/addAdmin",val);
        console.log(res);
        if(res.status===201)
        {
            console.log(res);
            alert("successfully Sigined in")
            navigate('/login')
        }else{
            alert("error")
        }
    }


    function convertToBase64(file) {
        // console.log("b64",file);
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
    
            fileReader.onload = () => {
                resolve(fileReader.result);
            }
            fileReader.onerror = (error) => {
                reject(error);
            }
        })
    }


    return (
        <div>
            <SmallNav/>
            <div className="container-fluid">
                <div className="row main-content text-center">
                    <div className="col-md-4 text-center company__info">
                        {/* <span className="company__logo"><h2><span className="fa fa-android"></span></h2></span> */}
                        <h4 className="company_title">College logo</h4>
                    </div>
                    <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
                        <div className="container-fluid">
                            <div className="row">
                                <h2>Sign In</h2>
                            </div>
                            <div className="row">
                                <form control="" onSubmit={submit} className="form-group">
                                    <div className="row">
                                        <input type="text" onChange={inputValues} name="UserName" id="username" className="form__input" placeholder="Username" />
                                    </div>
                                    <div className="row">
                                        <input type="password" onChange={inputValues} name="Password" id="password" className="form__input" placeholder="Password" />
                                    </div>
                                    <div className="row remeber-box">
                                        <label htmlFor="files" className='profile'>Select profile</label>
                                        <input type="file" onChange={profile} name='Profile'  className="" />
                                        
                                    </div>
                                    <div className="row sign-btn">
                                        <button className="btn">Submit</button>
                                    </div>
                                </form>
                            </div>
                            <div className="row">
                                <p>Already have an account? <Link to={'/login'}>Login Here</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Signin
