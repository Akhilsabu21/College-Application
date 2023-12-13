import React, { useEffect, useState } from 'react'
import StaffSmallNav from '../StaffSmallNav/StaffSmallNav'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


let pic = "";
let Dep="";
const StudentRegister = () => {

    const navigator = useNavigate()
    const [staff, setStaff] = useState("")
    const [val, setVal] = useState({
        UserName: "",
        email: "",
        StudentId: "",
        Year: "",
        dob: "",
        gen: "",
        pho: "",
        Sem: "",
        attendance: "",
        con: "",
        Imark:
            {
            Isub1:"",
            Isub2:"",
            Isub3:"",
            Isub4:"",
            Isub5:"",
            Isub6:""
        },
        Smark:
        {
        Ssub1:"",
        Ssub2:"",
        Ssub3:"",
        Ssub4:"",
        Ssub5:"",
        Ssub6:""
    }
    })
    const getStaff = async () => {
        const key = JSON.parse(localStorage.getItem('stafftoken'));
          const response = await axios.get('http://localhost:3001/api/staffhome', { headers: { 'Authorization': `Bearer ${key}` } })
          Dep=response.data.dep;
          setStaff(response.data.msg);
        }
    const setData = (e) => {
        console.log(e.target.value);
        setVal((pre) => {
            return { ...pre, [e.target.name]: e.target.value };
        })
    }
    const setImark=(e)=>{
        console.log(e.target.value);
        setVal((pre)=>{
            return{ ...pre ,Imark: {...pre.Imark,[e.target.name] : e.target.value}}
        })
    }
    const setSmark=(e)=>{
        console.log(e.target.value);
        setVal((pre)=>{
            return{ ...pre ,Smark: {...pre.Smark,[e.target.name] : e.target.value}}
        })
    }
    const profile = async (e) => {
        pic = await convertToBase64(e.target.files[0]);
        console.log(pic);
    }
    const submit = async (e) => {
        e.preventDefault();
        console.log(val, pic,staff);
        const res = await axios.post("http://localhost:3001/api/studentregister", { ...val, Pic: pic , 
        RegisteredBy:staff,Dep:Dep });
        console.log(res);
        if (res.status === 200) {
            console.log(res);
            alert("Data Added");
            navigator("/staffhome")
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
    getStaff()
},[])

    return (
        <div>
            
      <nav className="nav container-fluid">
                <div className="container d-flex justify-content-between">
                    <div className="nav-left">
                        <div className="nav">
                            <Link to={'/staffhome'} className="nav-link nav-links active" href="#">College Logo</Link>
                        </div>
                    </div>
                </div>
            </nav>
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
                            <p className="form-label">Student ID</p>
                            <input onChange={setData} type='text' name="StudentId" className="form-input" />
                            <p className="form-label">Attendance</p>
                            <input onChange={setData} type='text' name="attendance" className="form-input" />
                            <p className="form-label">Year</p>
                            <input onChange={setData} type='number' name="Year" className="form-input" />
                            <label className="form-label">
                                Department:
                            </label>
                                <select onChange={setData} name="Dep" className="form-input">
                                    <option >{Dep}</option>
                                </select>
                        </div>
                        <div className="container-right">
                            <p className="form-label">Contact*</p>
                            <input onChange={setData} type='number' name="con" className="form-input" />
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

                            <p className="form-label">Phone</p>
                            <input onChange={setData} type='number' name="pho" className="form-input" />
                            <p className="form-label">District</p>
                            <input onChange={setData} type='text' name="dist" className="form-input" />

                            <p className="form-label">Profile</p>
                            <input type='file' onChange={profile} name="pic" className="form-input profile" />

                            <label className="form-label">
                                Semester:
                                
                            </label>
                                <select onChange={setData} name="Sem" className="form-input">
                                    <option>Semester1</option>
                                    <option>Semester 2</option>
                                    <option>Semester 3</option>
                                    <option>Semester 4</option>
                                    <option>Semester 5</option>
                                    <option>Semester 6</option>
                                </select>


                        </div>

                    </div>
                    <p className=" exam-type">
                        INTERNAL EXAM
                    </p>
                    <div className="form-register">
                    <div className="birthday-gender">
                        
                        <div>
                            <p className="form-label">Subject 1</p>
                            <input onChange={setImark} type='number' name="Isub1" className="form-input-small" />
                        </div>
                        <div>
                            <p className="form-label">Subject 2</p>
                            <input onChange={setImark} type='number' name="Isub2" className="form-input-small" />
                        </div>
                        <div>
                            <p className="form-label">Subject 3</p>
                            <input onChange={setImark} type='number' name="Isub3" className="form-input-small" />
                        </div>
                    </div>
                    <div className="birthday-gender">
                        <div>
                            <p className="form-label">Subject 4</p>
                            <input onChange={setImark} type='number' name="Isub4" className="form-input-small" />
                        </div>
                        <div>
                            <p className="form-label">Subject 5</p>
                            <input onChange={setImark} type='number' name="Isub5" className="form-input-small" />
                        </div>
                        <div>
                            <p className="form-label">Subject 6</p>
                            <input onChange={setImark} type='number' name="Isub6" className="form-input-small" />
                        </div>
                    </div>
                </div>
                    <p className=" exam-type">
                        SEMESTER EXAM
                    </p>
                    <div className="form-register">
                    <div className="birthday-gender">
                        
                        <div>
                            <p className="form-label">Subject 1</p>
                            <input onChange={setSmark} type='number' name="Ssub1" className="form-input-small" />
                        </div>
                        <div>
                            <p className="form-label">Subject 2</p>
                            <input onChange={setSmark} type='number' name="Ssub2" className="form-input-small" />
                        </div>
                        <div>
                            <p className="form-label">Subject 3</p>
                            <input onChange={setSmark} type='number' name="Ssub3" className="form-input-small" />
                        </div>
                    </div>
                    <div className="birthday-gender">
                        <div>
                            <p className="form-label">Subject 4</p>
                            <input onChange={setSmark} type='number' name="Ssub4" className="form-input-small" />
                        </div>
                        <div>
                            <p className="form-label">Subject 5</p>
                            <input onChange={setSmark} type='number' name="Ssub5" className="form-input-small" />
                        </div>
                        <div>
                            <p className="form-label">Subject 6</p>
                            <input onChange={setSmark} type='number' name="Ssub6" className="form-input-small" />
                        </div>
                    </div>
                </div>
                <div className="container s-btn">
                    <button className="button-submit">Submit</button>
                </div>
                
                </form>
            </div>
        </div>
    )
}

export default StudentRegister
