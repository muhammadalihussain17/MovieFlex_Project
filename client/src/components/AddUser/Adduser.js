import React from 'react'
import {useState} from 'react';
import { postApi } from '../../service/Api';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Adduser.css';


function Adduser() {

const defaultValue = {
    username : '',
    moviename: '',
    movierating: '',
    movieurl: ''
}

const [user,setUser] = useState(defaultValue)

const onValueChange=(e) => {
    setUser({...user, [e.target.name]: e.target.value})
    console.log(user);
}


const addUserDetails = async () => {
   await postApi(user);
}


  return (
    <div>
       <div className='container-fluid form'>
         <div className='container form-container shadow-lg'>
          <form >
           <div className='row'>
            <div className='col-lg-12 col-md-12'>
               <label>Username</label>
            </div>
            <div className='col-lg-12 col-md-12'>
               <input className='form-control' placeholder='Enter your Name' name='username'required onChange={(e) => onValueChange(e)}></input>
            </div>
            <div className='col-lg-12 col-md-12'>
               <label>Favourite Movie Name</label>
            </div>
            <div className='col-lg-12 col-md-12'>
               <input className='form-control' placeholder='Enter your Favourite Movie' name='moviename' onChange={(e) => onValueChange(e)}></input>
            </div>
            <div className='col-lg-12 col-md-12'>
               <label>Upload Movie Url</label>
            </div>
            <div className='col-lg-12 col-md-12'>
               <input className='form-control' placeholder='Enter your Movie Photo Url' name='movieurl' onChange={(e) => onValueChange(e)}></input>
            </div>
            <div className='col-lg-12 col-md-12'>
               <label>Rate Movie</label>
            </div>
            <select className='col-lg-12 col-md-12 form-control ratingDrop'name='movierating' onChange={(e) => onValueChange(e)}>
                <option>Select</option>
                <option id='avergae'>Average</option>
                <option id='good'>Good</option>
                <option id='excellent'>Excellent</option>
            </select>
            <Link to='/alluser'>
            <button className='btn btn-warning btn1' onClick={() => addUserDetails()}>Submit</button>
            </Link>
           </div>        
          </form>
         </div>
      </div>  
    </div>
  )
}

export default Adduser
