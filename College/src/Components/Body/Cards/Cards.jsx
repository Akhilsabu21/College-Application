import React, { useEffect, useState } from 'react';
import './Cards.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Cards = ({name,pic,id,Post,staffdelete}) => { 
  
  
  return (
    <div className="cards">
    <div className="cards-img">
        <img src={pic} alt="" />
    </div>
    <div className="card-details">
        <h1>{name}</h1>
        <p>{Post}</p>
        <div className="card-btns">
            <Link className='btn-a' to={`/staff/${id}`}><button className='v-btn'  >view</button></Link>
            <Link className='btn-a' to={`/staffedit/${id}`}><button className='e-btn' >edit</button></Link>
            <button className='d-btn'  onClick={()=>staffdelete(id)}>Delete</button>
            
        </div>
    </div>
  </div>
  )
}

export default Cards
