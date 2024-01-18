import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoadingSpinner from './LoadingSpinner'
import { BASE_URL } from '../service/baseurl';




function HomeTable({displayData,removeUser}) {
  console.log("display",displayData);

  console.log(displayData);
  
  return (
    <>
    <Table striped bordered hover classname='mt-3 '>
      <thead>
        <tr>
          <th>No</th>
          <th>Full Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Status</th>
          <th>Profile</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {

        displayData.length>0?

        displayData.map((item,index)=>(
         
          <tr>
          <td>{index+1}</td>
          <td>{item.fname} {item.lname}</td>
          <td>{item.email}</td>
          <td>{item.mobile}</td>
          <td><button className={item.status==="Active"?"m-2 btn btn-success":"m-2 btn btn-danger"}></button>{item.status}</td>
          <td><img style={{width:"50px", height:"50px",borderRadius:"50%"}} src={`${BASE_URL}/uploads/${item.profile}`} alt="" /></td>
          <td>


            <Link to={`/view/${item._id}`}> <i style={{color:"black"}} class="fa-sharp fa-solid fa-eye fs-4 me-2"></i></Link>
            <Link to={`/edit/${item._id}`}><i style={{color:"black"}} class="fa-sharp fa-solid fa-pen fs-4 me-2"></i></Link>
            <span onClick={()=>removeUser(item._id)}><i class="fa-sharp fa-solid fa-eye fa-trash fs-4"></i></span>
            </td>       
        </tr>

        )) :(
          <h5 className='text-center'>Error 404 No Data Found...!</h5>
        )

      
      }
     
          
      </tbody>
    </Table>

    </>
  )
  }

export default HomeTable