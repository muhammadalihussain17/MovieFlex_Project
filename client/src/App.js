import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Adduser from './components/AddUser/Adduser';
import Edituser from './components/EditUser/Edituser';
import Viewuser from './components/ViewUser/Viewuser';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='adduser' element={<Adduser/>} />
        <Route path='edituser/:id' element={<Edituser/>} />
        <Route path='alluser' element={<Viewuser/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
