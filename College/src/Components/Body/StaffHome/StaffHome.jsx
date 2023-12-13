import React, { useEffect, useState } from 'react'
import StaffNav from '../../StaffNav/StaffNav'
import { Link } from 'react-router-dom';
import axios from 'axios';
import StudentCards from '../StudentCards/StudentCards';

const StaffHome = () => {

  const [student, setStudent] = useState([]);
  const [staff, setStaff] = useState("")
  const [count, setCount] = useState(0);
  

  const getStaff = async () => {
  const key = JSON.parse(localStorage.getItem('stafftoken'));
    const response = await axios.get('http://localhost:3001/api/staffhome', { headers: { 'Authorization': `Bearer ${key}` } })
    setStaff(response.data.msg);
    console.log(response);
  }

  const getAllStudents = async () => {
    const res = await axios.get('http://localhost:3001/api/allstudents');
    // console.log(res.data);
    setStudent(res.data);
  }
  const studentdelete = async (id) => {
    const res = await axios.delete(`http://localhost:3001/api/deletestudent/${id}`)
    console.log(res);
    setCount(count + 1)
    if (res.status == 200) {
      alert("Deleted");
    }
  }
  useEffect(() => {
    getStaff();
    getAllStudents();
  }, [0,count])
  return (
    <div>
      <StaffNav staff={staff} />
      <div className="container home-body">
        <h1 className='heading'>Students</h1>

        <div className='container cards-body'>
          {
            staff ? student.map((dt) => <StudentCards key={dt._id} id={dt._id} name={dt.UserName} pic={dt.Pic} studentdelete={studentdelete} />) : <></>
          }
        </div>
        <div className="register-btn">
          <h1>Register new student</h1>
          <Link to={'/studentregister'}>Register</Link>
        </div>
      </div>
    </div>
  )
}

export default StaffHome
