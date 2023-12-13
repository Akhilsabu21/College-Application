import React, { useEffect, useState } from 'react';
import './staffRegister.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SmallNav from '../SmallNav/SmallNav';

let pic="";
const Register = () => {
    const navigator=useNavigate()
    const [admin,setAdmin]=useState("")
    const [val, setVal] = useState({
        UserName: "",
        email: "",
        Password: "",
        StaffId: "",
        Post: "",
        Exp: "",
        dep: "",
        salary: "",
        dob: "",
        gen: "",
        pho: ""
    })
    const getAdmin=async()=>{
        const key = JSON.parse(localStorage.getItem('admintoken'));
          axios.get('http://localhost:3001/api/home', {headers:{'Authorization': `Bearer ${key}`}} )
          .then((res)=>{
            setAdmin(res.data.msg);
          }).catch((error)=>{
            console.log(error);
          })
        }

    const setData = (e) => {
        setVal((pre) => {
            return { ...pre, [e.target.name]: e.target.value };
        })
    }
    const profile=async(e)=>{
         pic=await convertToBase64(e.target.files[0]);
         console.log(pic);
    }
    const submit =async (e) => {
        e.preventDefault();
        console.log('val',val,'pic',pic,'admin',admin);
        const res = await axios.post("http://localhost:3001/api/staffregister", {...val,Pic:pic,RegisteredBy:admin});
        console.log(res);
        if (res.status === 201) {
            console.log(res);
            alert("Data Added");
            navigator("/admin")
        }
        else {
            alert("Data Not Added")
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
useEffect(()=>{
    getAdmin()
},[])
    
    return (
        <div>
            <SmallNav />
            <div className="register-content">
                <div className="register-profile-image">
                    <img src={pic} alt="" />
                </div>
                <form action="" onSubmit={submit}>
                    <div className="form-register">
                        <div className="container-left">
                            <p className="form-label">Name*</p>
                            <input onChange={setData} type='text' name="UserName" className="form-input" />
                            <p className="form-label">Email*</p>
                            <input onChange={setData} type='text' name="email" className="form-input" />
                            <p className="form-label">Staff ID</p>
                            <input onChange={setData} type='text' name="StaffId" className="form-input" />
                            <p className="form-label">Post</p>
                            <input onChange={setData} type='text' name="Post" className="form-input" />
                            <p className="form-label">Department</p>
                            <input onChange={setData} type='' name="dep" className="form-input" />
                            <p className="form-label">Experience</p>
                            <input onChange={setData} type='number' name="Exp" className="form-input" />
                        </div>
                        <div className="container-right">
                            <p className="form-label">password*</p>
                            <input onChange={setData} type='password' name="Password" className="form-input" />
                            <div className="birthday-gender">
                                <div>
                                    <p className="form-label">Date-of-birth</p>
                                    <input onChange={setData} type='Date' name="dob" className="form-input-small" />
                                </div>
                                <div>
                                    <p className="form-label">Gender</p>
                                    <input onChange={setData} type='text' name="gen" className="form-input-small" />
                                </div>
                            </div>

                            
                            <p className="form-label">Salary</p>
                            <input onChange={setData} type='text' name="salary" className="form-input" />
                            <p className="form-label">Phone</p>
                            <input onChange={setData} type='number' name="pho" className="form-input" />
                            <p className="form-label">District</p>
                            <input onChange={setData} type='text' name="dist" className="form-input" />

                            <p className="form-label">Profile</p>
                            <input type='file' onChange={profile} name="pic" className="form-input profile" />

                            <div className="s-btn">
                                <button className=" button-submit">Submit</button>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
