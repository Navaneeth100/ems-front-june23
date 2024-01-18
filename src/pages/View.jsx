import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import LoadingSpinner from '../components/LoadingSpinner'
import { Link, useParams } from 'react-router-dom'
import { BASE_URL } from '../service/baseurl'
import { getUsers } from '../service/allapi'


function View() {

  const[showspin,setShowSpin]=useState(true)

  useEffect(() => {
   
        setTimeout(()=>{
          setShowSpin(false)
        },1000)
  }, [])

  const [user,setUser] = useState({})
  const {id}=useParams()
  console.log(id);

  useEffect(() => {
    getUserview()
  }, [])
  

  const getUserview=async()=>{
    const {data}=await getUsers("")
    console.log(data);
    console.log(data.find(item=>item._id==id));
    setUser(data.find(item=>item._id==id))
  }
  
  return (
    <>

    { showspin?
      <LoadingSpinner/>:


    <div className='container' style={{height:"80vh",width:"550px"}}>
     
    
     {
      user?
      <Card className='shadow ms-auto mt-5 p-3'>

         <div className='image text-center mb-3'>
          <img src={`${BASE_URL}/uploads/${user.profile}`} className="rounded" width="70px" height="70px" alt="no image" />
         </div>
         <div className='text-center'>
          <h3>Name: {user.fname.toUpperCase()} {user.lname.toUpperCase()}</h3>
          <h3>Email:{user.email}</h3>
          <h3>Mobile:{user.mobile}</h3>
          <h3>Gender:{user.gender}</h3>
          <h3>Status:<button className={user.status==="Active"?"m-2 btn  btn-success":"m-2 btn btn-danger"}>{user.status}</button></h3>
          <h3>Location:{user.location}</h3>

          <Link to="/"><Button style={{backgroundColor:"black" , color:"white"}} className='m-2'>back</Button></Link>

         </div>

      </Card>:""
   }
    </div>
   
  }

    </>
   
  )
}

export default View