import React from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

function Header() {
  return (
    <div className='container-fluid'>
         <div className='container'>
            <Link to='/' className='title'><h1>MovieFlex</h1></Link>
            <p className='headerp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint tenetur, suscipit illum adipisci minus commodi.</p>
         </div>
       </div>
  )
}

export default Header
