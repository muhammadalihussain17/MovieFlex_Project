import React from 'react'
import {useState, useEffect} from 'react';
import { updatePostApi,getSingleDataApi } from '../../service/Api';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Edituser.css';


function Edituser() {

const defaultValue = {
    username : '',
    moviename: '',
    movierating: '',
    movieurl:''
}

const [user,setUser] = useState(defaultValue)

const onValueChange=(e) => {
    setUser({...user, [e.target.name]: e.target.value})
    console.log(user);
}

const updateUserDetails = async () => {
  await updatePostApi(user,id);
}

const {id} = useParams();

useEffect(() => {
    userDetails();
},[])


const userDetails = async () => {
  const response = await getSingleDataApi(id);
  setUser(response.data);
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
               <input className='form-control' placeholder='Enter your Name' name='username' value={user.username} onChange={(e) => onValueChange(e)}></input>
            </div>
            <div className='col-lg-12 col-md-12'>
               <label>Favourite Movie Name</label>
            </div>
            <div className='col-lg-12 col-md-12'>
               <input className='form-control' placeholder='Enter your Favourite Movie' name='moviename'value={user.moviename} onChange={(e) => onValueChange(e)}></input>
            </div>
            <div className='col-lg-12 col-md-12'>
               <label>Upload Movie Url</label>
            </div>
            <div className='col-lg-12 col-md-12'>
               <input className='form-control' placeholder='Enter your Movie Photo Url' name='movieurl' value={user.movieurl} onChange={(e) => onValueChange(e)}></input>
            </div>
            <div className='col-lg-12 col-md-12'>
               <label>Rate Movie</label>
            </div>
            <select className='col-lg-12 col-md-12 form-control ratingDrop'name='movierating' value={user.movierating} onChange={(e) => onValueChange(e)}>
                <option>Select</option>
                <option id='avergae'>Average</option>
                <option id='good'>Good</option>
                <option id='excellent'>Excellent</option>
            </select>
            <Link to='/alluser'>
            <button className='btn btn-warning btn1' onClick={() => updateUserDetails()}>Update</button>
            </Link>
           </div>        
          </form>
         </div>
      </div>  
    </div>
  )
}

export default Edituser
