import React from 'react'
import { useEffect,useState } from 'react';
import { getAllDataApi, deleteUserDetails,} from '../../service/Api';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Viewuser.css';

function Viewuser() {

const [user,setUser] = useState([]);
const [filterVal,setFilterVal] = useState('');
const [searchApiData,setSearchApiData] = useState([]);
const [sort,setSort] = useState([]);
const [sortVal,setSortValue] = useState('');


useEffect(() => {
  getAllUsersData();
},[])

const getAllUsersData = async () => {
   const response = await getAllDataApi();
   setUser(response.data);
   setSearchApiData(response.data);
   setSort(response.data);
}

const handleFilter = (e) => {
     if(e.target.value === '')
     {
      setUser(searchApiData);
     }
     else
     {
     const filterResult = searchApiData.filter(users => users.username.toLowerCase().includes(e.target.value.toLowerCase()))
     setUser(filterResult)
     }
     setFilterVal(e.target.value)
}


const deleteUser = async (id) => {
      await deleteUserDetails(id)
      getAllUsersData();
}

const downloadPdf = () => {
  const input = document.getElementById('Viewuser')
  html2canvas(input, {logging: true, letterRendering: 1, useCORS:true}).then(canvas => {
    const imgWidth = 208;
    const imageHeight = canvas.height * imgWidth/canvas.width
    const imgData = canvas.toDataURL('img/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imageHeight);
    pdf.save("MovieFlex_Database.pdf");
  })
}

const handleSort = (e) => {
  if(e.target.value === '')
  {
    setUser(sort)
  }
  else
  {
    const result = sort.sort((a,b) =>  a.moviename.localeCompare(b.moviename))
    setUser(result);

  }

  setSortValue(e.target.value)
 
}





  return (
    <div className='' id='Viewuser'>
      <div className='container card-container shadow-lg'>
        <div className='row row-container'>
          <div className='col-lg-8 col-md-8'>
            <input className='form-control search' placeholder='Search' value={filterVal} onChange={(e) => handleFilter(e)}></input>
          </div>
          <div className='col-lg-2 col-md-2'>
           <button className='btn btn-warning pdfbtn1'onClick={() => downloadPdf()} >Download PDF</button>
          </div>
          <div className='col-lg-2 col-md-2'>
            <select className=' pdfbtn2 form-control' value={sortVal}  onChange={(e) => handleSort(e)}>
              <option>Sort By</option>
              <option id='moviename'>Moviename</option>
            </select>
          </div>
        </div>
        <div className='row'>
        <h3>MovieFlex Users Database</h3>
            {
              user.map(users => {
                return(
                    <div className='col-lg-6 usercard shadow-lg'>
                    <div className='row usercard1'>
                    <div className='col-lg-8 col-md-8'>
                    <h6>Name: {users.username}</h6>
                    <h6>Movie Name: {users.moviename}</h6>
                    <h6>Movie Rating: {users.movierating}</h6>
                    <Link to={`/edituser/${users._id}`}><button className='updatebtn'><i className='fa fa-pencil icon'/></button></Link>
                    <button className='delbtn' onClick={() => deleteUser(users._id)} ><i className='fa fa-trash icon'/></button>
                    </div>
                    <div className='col-lg-4 col-md-4'>
                    <img className='imgUrl' src={users.movieurl} alt={''}/>
                    </div>
                    </div>
                    </div>
                )
              })
            }
         </div>   
      </div>
    </div>
  )
}
      

export default Viewuser
