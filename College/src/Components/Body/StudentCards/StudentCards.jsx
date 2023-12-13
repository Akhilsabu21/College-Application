import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

const StudentCards = ({ name, id, pic, studentdelete }) => {

  return (
    <div className="cards">
      <div className="cards-img">
        <img src={pic} alt="" />
      </div>
      <div className="card-details">
        <h1>{name}</h1>
        <p>details</p>
        <div className="card-btns">
          <Link className='btn-a' to={`/student/${id}`}><button className='v-btn'>view</button></Link>
          <Link className='btn-a' to={`/studentedit/${id}`}><button className='e-btn'>edit</button></Link>
          <button className='d-btn' onClick={() => studentdelete(id)}>Delete</button>

        </div>
      </div>
    </div>
  )
}

export default StudentCards
