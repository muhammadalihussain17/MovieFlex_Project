import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';


function Footer() {

const currentYear = new Date();
const year = currentYear.getFullYear();    

const currentDate = new Date();
const hour = currentDate.getHours()
const min = currentDate.getMinutes();
const sec = currentDate.getSeconds();
  return (
    <div>
      <div className='container-fluid footer-container'>
        <h6 className='footerh6'>Copyright@{year}</h6>
        <h6 className='footer2h6'>{hour}:{min}:{sec}</h6>
      </div>
    </div>
  )
}


export default Footer;