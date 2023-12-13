import React, { useEffect, useState } from 'react';
import './StaffEdit.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import SmallNav from '../SmallNav/SmallNav';

let pic="";
const StaffEdit = () => {
    const [val,setVal]=useState({
        UserName: "",
        email: "",
        Password: "",
        StaffId: "",
        Post: "",
        Exp: "",
        salary: "",
        dep: "",
        RegisteredBy: "",
        dob: "",
        gen: "",
        pho: ""
    })
    const {id}=useParams()
    const navigate=useNavigate()
    const getStaff=async()=> {
        const res=await axios.get(`http://localhost:3001/api/staff/${id}`)
        console.log(res.data);
        setVal(res.data);
        if(res.data.Pic){
            pic=res.data.Pic
        }else{
            pic=""
        }
      }
      useEffect(() => {
      getStaff()
      }, [])
      console.log(val);

    const setData = (e) => {
        setVal((pre) => {
            return { ...pre, [e.target.name]: e.target.value };
        })
    }
    const profile=async(e)=>{
        pic=await convertToBase64(e.target.files[0]);
        // console.log(pic);
   }


    const submit=async(e)=>{
        e.preventDefault();
        const res=await axios.patch(`http://localhost:3001/api/staffedit/${id}`,{...val,Pic:pic});
        console.log(res);
        console.log(val,pic);
        navigate('/admin')
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
            <SmallNav />
            <div className="register-content">
                <div className="register-profile-image">
                    {
                        !pic?<img src={val.Pic} alt="" />:<img src={pic} alt="" />
                    }
                </div>
                <form action="" onSubmit={submit}>
                    <div className="form-register">
                        <div className="container-left">
                            <p className="form-label">Name*</p>
                            <input onChange={setData} value={val.UserName} type='text' name="UserName" className="form-input" />
                            <p className="form-label">Email*</p>
                            <input onChange={setData} value={val.email} type='text' name="email" className="form-input" />
                            <p className="form-label">Staff ID</p>
                            <input onChange={setData} value={val.StaffId} type='text' name="StaffId" className="form-input" />
                            <p className="form-label">Post</p>
                            <input onChange={setData} value={val.Post} type='text' name="Post" className="form-input" />
                            <p className="form-label">Department</p>
                            <input onChange={setData} value={val.dep} type='text' name="dep" className="form-input" />
                            <p className="form-label">Experience</p>
                            <input onChange={setData} value={val.Exp} type='number' name="Exp" className="form-input" />
                        </div>
                        <div className="container-right">
                            <p className="form-label">password*</p>
                            <input onChange={setData}  type='password' name="Password" className="form-input" />
                            <div className="birthday-gender">
                                <div>
                                    <p className="form-label">Date-of-birth</p>
                                    <input onChange={setData} value={val.dob} type='Date' name="dob" className="form-input-small" />
                                </div>
                                <div>
                                    <p className="form-label">Gender</p>
                                    <input onChange={setData} value={val.gen} type='text' name="gen" className="form-input-small" />
                                </div>
                            </div>

                            
                            <p className="form-label">Salary</p>
                            <input onChange={setData} value={val.salary} type='number' name="salary" className="form-input" />
                            <p className="form-label">Phone</p>
                            <input onChange={setData} value={val.pho} type='number' name="pho" className="form-input" />
                            <p className="form-label">District</p>
                            <input onChange={setData} value={val.dist} type='text' name="dist" className="form-input" />

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

export default StaffEdit
