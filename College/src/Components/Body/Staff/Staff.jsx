import React, { useEffect, useState } from 'react';
import './Staff.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import SmallNav from '../SmallNav/SmallNav';

const Staff = () => {
  const { id } = useParams();
  const navigate=useNavigate();
  const [val, setVal] = useState();
  const getStaff = async () => {
    const res = await axios.get(`http://localhost:3001/api/staff/${id}`)
    setVal(res.data)
  }
  const staffdelete=async()=>{
    const res=await axios.delete(`http://localhost:3001/api/delete/${id}`)
    console.log(res);
    if(res.status==200){
      alert("Deleted");
      navigate('/admin')
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
                            <Link to={'/admin'} className="nav-link nav-links active" href="#">College Logo</Link>
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
                <p>Staff ID:<span>{val.StaffId}</span></p>
                <p>designation:<span>{val.Post}</span></p>
                <p>Department:<span>{val.dep}</span></p>
                <p>Experience:<span>{val.Exp}</span></p>
                <p>Salary:<span>{val.salary}</span></p>
                <p>Registered By:<span>{val.RegisteredBy}</span></p>
                <p>Date-Of-Birth:<span>{val.dob}</span></p>
                <p>Gender:<span>{val.gen}</span></p>
                <p>Contact:<span>{val.pho}</span></p>
              </div>
              :
              <></>
          }
          <div className="staff-btns">
            <Link to={`/staffedit/${id}`}><button className='e-btn' >Edit</button></Link>
            <button className='d-btn' onClick={staffdelete} >Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Staff
