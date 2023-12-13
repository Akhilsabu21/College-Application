import React, { useEffect, useState } from 'react';
import './AdminHome.css';
import Nav from '../../Nav/Nav';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import Cards from '../Cards/Cards';

const Home = () => {
const [staff,setStaff]=useState([]);
    const [val,setVal]=useState("")
    const [admin,setAdmin]=useState("")
    const [count,setCount]=useState(0)
    

      // setVal(JSON.parse(localStorage.getItem(key)))



    const getAdmin=async()=>{
      const key = JSON.parse(localStorage.getItem('admintoken'));
      setVal(key) 
        axios.get('http://localhost:3001/api/home', {headers:{'Authorization': `Bearer ${val}`}} )
        .then((res)=>{
          console.log(res);
          setAdmin(res.data.msg);
        }).catch((error)=>{
          console.log(error);
        })
      }
        
    const getAllStaff=async()=>{
        const res=await axios.get('http://localhost:3001/api/getstaffs');
        // console.log(res.data);
        setStaff(res.data);
      }

      const staffdelete=async(id)=>{
        const res=await axios.delete(`http://localhost:3001/api/delete/${id}`)
        console.log(res);
        setCount(count+1)
        if(res.status==200){
          alert("Deleted");
        }
        
      } 
        useEffect(() => {
          getAdmin();
          getAllStaff();
        },[val,count])
    return (
        <div>
            <Nav admin={admin}/>
            <div className="container home-body">
             {
              admin?<h1 className='heading'>professors of our College</h1>:<></>
             }
            <div className='container cards-body'>
              {
                admin?staff.map((dt)=><Cards key={dt._id} Post={dt.Post} id={dt._id} name={dt.UserName} pic={dt.Pic} staffdelete={staffdelete}  />):<></>
              }
            </div>
                <div className="register-btn">
                <h1>Register new staff</h1>
                {
                  val?<Link to={'/staffregister/'} >Register</Link>:
                  <Link to={'/login'} >Login</Link>
                }
                </div>
            </div>
        </div>
    )
}

export default Home
