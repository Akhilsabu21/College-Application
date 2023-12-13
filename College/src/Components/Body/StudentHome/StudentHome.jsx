import React, { useEffect, useState } from 'react';
import './StudentHome.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const StudentHome = () => {
  const [studentData, setStudentData] = useState({})
  const navigate=useNavigate()
const getId=()=>{
  const id = JSON.parse(localStorage.getItem('id'));
    getStudentData(id.id)
    if(studentData.attendance<75){
      alert('attendence is below 75%')
    }
}
  const getStudentData=async(id)=>{
    await axios.get(`http://localhost:3001/api/student/${id}`)
    .then((res)=>{
      setStudentData(res.data);
      console.log(res.data.Imark);
      const{Isub1,Isub2,Isub3}=res.data.Imark
      console.log(Isub1,Isub2,Isub3);
    }).catch((error)=>{
      console.log(error);
    })
    
    // setMark()
  }

  // console.log(studentData.Imark.Isub1);
  let Itotel=0;
  // const setMark=()=>{
  //   console.log(studentData);
  // }
  const lougOut=()=>{
      localStorage.removeItem('id');
      navigate('/')
  }
  
  useEffect(() => {
    getId()
    

  }, [])
  return (
    <div>
    <nav id="navbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container">
                <Link to={'/'} className="navbar-brand" href="#">
                    <h1>College</h1>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#Home">Home
                                <span className="sr-only"> (current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Contact">Contact</a>
                        </li>
                    </ul>
                    <div className="login-btn ms-auto">
                        {/* <Link to={'/studentlogin'} className='student-login'>Student Login</Link> */}
                        <div className="wrapper">
                          <button className='logout-btn' onClick={lougOut}>Log Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </nav>


      <div className='container staff-body'>
        <div id="profile">
          {
            studentData ? <img src={studentData.Pic} alt="" /> : <img />
          }
        </div>
        <div className="staffDetails">
          {
            studentData ?
              <div className='details'>

                <p>Name:<span>{studentData.UserName}</span></p>
                <p>Emai:<span>{studentData.email}</span></p>
                <p>Student ID:<span>{studentData.StudentId}</span></p>
                <p>Date Of Birth:<span>{studentData.dob}</span></p>
                <p>Department:<span>{studentData.Dep}</span></p>
                <p>Semester:<span>{studentData.Sem}</span></p>
                <p>Attendence:<span>{studentData.attendance}</span></p>
                <p>Registered By:<span>{studentData.RegisteredBy}</span></p>
                <p>Gender:<span>{studentData.gen}</span></p>
                <p>Contact:<span>{studentData.pho}</span></p>
                <p>Internal Total Score:<span>{}</span></p>
                <p>Semester Total Score:<span>{Itotel}</span></p>
              </div>
              :
              <></>
          }
        </div>
      </div>
    </div>
  )
}

export default StudentHome;
