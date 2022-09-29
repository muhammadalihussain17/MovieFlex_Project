import React from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';


function Home() {
  return (
    <div className='container-fluid home'>
      <div className='container home-container shadow-lg'>
        <Link to='/adduser'className='btn btn-warning btn2'>Add User</Link>
        <Link to='/alluser'className='btn btn-warning btn2'>View Users</Link>
        <br></br>
        <div className='img'>
          <div>
            <img className='imgS shadow-lg' src="https://images.unsplash.com/photo-1501432377862-3d0432b87a14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
          </div>
          <div>
            <img className='imgS1 shadow-lg' src='https://images.unsplash.com/photo-1608889175250-c3b0c1667d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'/>
          </div>
          <div>
            <img className='imgS1 shadow-lg' src='https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1hcnZlbCUyMGNvbWljc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'/>
          </div>
          <div>
            <img className='imgS1 shadow-lg' src='https://images.unsplash.com/photo-1635805739892-ab7b431400f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'/>
          </div>

        </div>
      </div>
    </div>
      
  )
}

export default Home
