import React, { useEffect, useState } from 'react'
import './StudentEdit.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';



let pic = "";

const StudentEdit = () => {
    const {id}=useParams()
    const navigator = useNavigate()
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
    const getStudent=async()=>{
        await axios.get(`http://localhost:3001/api/student/${id}`)
        .then((res)=>{
            setVal(res.data)
        }).catch((error)=>{
            console.log(error);
        })
    }
    const submit = async (e) => {
        e.preventDefault();
        console.log(val,'pic:',pic);
        // const res = await axios.post(`http://localhost:3001/api/studentedit/${id}`, { ...val, Pic: pic  });
        // console.log(res);
        // if (res.status === 200) {
        //     console.log(res);
        //     alert("Data Added");
        //     navigator("/staffhome")
        // }
        // else {
        //     alert("Data Not Added")
        // }
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
        getStudent()
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
                    {
                        !pic?<img src={val.Pic} alt="" />:<img src={pic} alt="" />
                    }
                </div>
                <form action="" onSubmit={submit}>
                    <div className="form-register">
                        <div className="container-left">
                            <p className="form-label">Name*</p>
                            <input value={val.UserName} onChange={setData} type='text' name="UserName" className="form-input" />
                            <p className="form-label">Email*</p>
                            <input value={val.email} onChange={setData} type='text' name="email" className="form-input" />
                            <p className="form-label">Student ID</p>
                            <input value={val.StudentId} onChange={setData} type='text' name="StudentId" className="form-input" />
                            <p className="form-label">Attendance</p>
                            <input value={val.attendance} onChange={setData} type='text' name="attendance" className="form-input" />
                            <p className="form-label">Year</p>
                            <input value={val.Year} onChange={setData} type='number' name="Year" className="form-input" />
                            <label className="form-label">
                                Department:
                            </label>
                                <select name="Dep" className="form-input">
                                    <option >{val.Dep}</option>
                                </select>
                        </div>
                        <div className="container-right">
                            <p className="form-label">Contact*</p>
                            <input value={val.con} onChange={setData} type='number' name="con" className="form-input" />
                            <div className="birthday-gender">
                                <div>
                                    <p className="form-label">Date-of-birth</p>
                                    <input value={val.dob} onChange={setData} type='Date' name="dob" className="form-input-small" />
                                </div>
                                <div>
                                    <p className="form-label">Gender</p>
                                    <input value={val.gen} onChange={setData} type='text' name="gen" className="form-input-small" />
                                </div>
                            </div>

                            <p className="form-label">Phone</p>
                            <input value={val.pho} onChange={setData} type='number' name="pho" className="form-input" />
                            <p className="form-label">District</p>
                            <input value={val.dist} onChange={setData} type='text' name="dist" className="form-input" />

                            <p className="form-label">Profile</p>
                            <input type='file' onChange={profile} name="pic" className="form-input profile" />

                            <label className="form-label">
                                Semester:
                                
                            </label>
                                <select value={val.Sem} onChange={setData} name="Sem" className="form-input">
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
                            <input value={val.Imark.Isub1} onChange={setImark} type='number' name="Isub1" className="form-input-small" />
                        </div>
                        <div>
                            <p className="form-label">Subject 2</p>
                            <input value={val.Imark.Isub2} onChange={setImark} type='number' name="Isub2" className="form-input-small" />
                        </div>
                        <div>
                            <p className="form-label">Subject 3</p>
                            <input value={val.Imark.Isub3} onChange={setImark} type='number' name="Isub3" className="form-input-small" />
                        </div>
                    </div>
                    <div className="birthday-gender">
                        <div>
                            <p className="form-label">Subject 4</p>
                            <input value={val.Imark.Isub4} onChange={setImark} type='number' name="Isub4" className="form-input-small" />
                        </div>
                        <div>
                            <p className="form-label">Subject 5</p>
                            <input value={val.Imark.Isub5} onChange={setImark} type='number' name="Isub5" className="form-input-small" />
                        </div>
                        <div>
                            <p className="form-label">Subject 6</p>
                            <input value={val.Imark.Isub6} onChange={setImark} type='number' name="Isub6" className="form-input-small" />
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
                            <input value={val.Smark.Ssub1} onChange={setSmark} type='number' name="Ssub1" className="form-input-small" />
                        </div>
                        <div>
                            <p className="form-label">Subject 2</p>
                            <input value={val.Smark.Ssub2} onChange={setSmark} type='number' name="Ssub2" className="form-input-small" />
                        </div>
                        <div>
                            <p className="form-label">Subject 3</p>
                            <input value={val.Smark.Ssub3} onChange={setSmark} type='number' name="Ssub3" className="form-input-small" />
                        </div>
                    </div>
                    <div className="birthday-gender">
                        <div>
                            <p className="form-label">Subject 4</p>
                            <input value={val.Smark.Ssub4} onChange={setSmark} type='number' name="Ssub4" className="form-input-small" />
                        </div>
                        <div>
                            <p className="form-label">Subject 5</p>
                            <input value={val.Smark.Ssub5} onChange={setSmark} type='number' name="Ssub5" className="form-input-small" />
                        </div>
                        <div>
                            <p className="form-label">Subject 6</p>
                            <input value={val.Smark.Ssub6} onChange={setSmark} type='number' name="Ssub6" className="form-input-small" />
                        </div>
                    </div>
                </div>
                <div className="container s-btn">
                    <button className="button-submit">Submit</button>
                </div>
                
                </form>
            </div>
      this is student edit
    </div>
  )
}

export default StudentEdit
