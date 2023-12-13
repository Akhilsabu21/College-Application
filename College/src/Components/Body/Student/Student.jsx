import React, { useEffect, useState } from 'react'
import './Student.css'
import SmallNav from '../SmallNav/SmallNav'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Student = () => {
const { id } = useParams();
  const navigate=useNavigate();
  const [val, setVal] = useState();
  const getStaff = async () => {
    const res = await axios.get(`http://localhost:3001/api/student/${id}`)
    setVal(res.data)
  }
  const StudentDelete=async()=>{
    const res=await axios.delete(`http://localhost:3001/api/deletestudent/${id}`)
    console.log(res);
    if(res.status==200){
      alert("Deleted");
      navigate('/staffhome')
    }else{
      alert("Not Deleted")
    }
  }
  useEffect(() => {
    getStaff()
  }, [])
  console.log(val);
  return (
    <div className='container'>
      
      <nav className="nav container-fluid">
                <div className="container d-flex justify-content-between">
                    <div className="nav-left">
                        <div className="nav">
                            <Link to={'/staffhome'} className="nav-link nav-links active" href="#">College Logo</Link>
                        </div>
                    </div>
                </div>
            </nav>

      <div className='container staff-body'>
        <div id="profile">
          {
            val ? <img src={val.Pic} alt="" /> : <img />
          }
        </div>
        <div className="staffDetails">
          {
            val ?
              <div className='details'>

                <p>Name:<span>{val.UserName}</span></p>
                <p>Emai:<span>{val.email}</span></p>
                <p>Student ID:<span>{val.StudentId}</span></p>
                <p>Department:<span>{val.Dep}</span></p>
                <p>Semester:<span>{val.Sem}</span></p>
                <p>Year Of Join:<span>{val.Year}</span></p>
                <p>District:<span>{val.dist}</span></p>
                <p>Registered By:<span>{val.RegisteredBy}</span></p>
                <p>Date-Of-Birth:<span>{val.dob}</span></p>
                <p>Gender:<span>{val.gen}</span></p>
                <p>Contact:<span>{val.pho}</span></p>
              </div>
              :
              <></>
          }
          <div className="staff-btns">
            <Link to={''}><button className='e-btn' >Edit</button></Link>
            <button className='d-btn' onClick={StudentDelete} >Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Student
