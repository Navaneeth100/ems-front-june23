import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Hometable from '../components/Hometable'
import LoadingSpinner from '../components/LoadingSpinner'
import { registerContext } from '../components/ContextShare'
import { Alert } from 'react-bootstrap'
import { deleteUser, getUsers } from '../service/allapi'



function Home() {

  const[allUserdata,setallUserdata]=useState([])

  // object
  const { registerData, setregisterData } = useContext(registerContext)

  // search
  const [search, setsearch] = useState("")

  console.log(search);


  const navigate = useNavigate()

  const getAllEmployees = async () => {
    const response = await getUsers(search)

    console.log(response);

    if(response.status==200){
      setallUserdata(response.data)
    }else{


    }
  }
  console.log(allUserdata);

  const removeUser=async(id)=>{
    const response=await deleteUser(id)
    console.log('Deleted successfully');
  }


  const [showspin, setShowSpin] = useState(true)

  useEffect(() => {

    getAllEmployees()

    setTimeout(() => {
      setShowSpin(false)
    }, 2000)
  }, [search])

  return (
    <>

      {/* for getting data from Add.jsx as contextshare */}
      {
        registerData && <Alert variant='success' onClose={() => setregisterData("")} dismissible >

          {registerData.fname.toUpperCase()} Registered Succesfully

        </Alert>
      }

      {

        showspin ?
          <LoadingSpinner /> :


          <div className='container d-flex flex-column'>

            <div className='search d-flex justify-content-center align-items-center mt-5 '>
              <span>Search:</span>
              <input type="text" placeholder='Search by Employee Name' className='form-control ms-2 'onChange={e=>setsearch(e.target.value)} style={{ width: "400px" }} />
              <Link to={'/add'} className='btn btn-success ms-3'>
                <i class="fa-solid fa-user-plus"></i>ADD
              </Link>
            </div>

            <div className='table mt-5'>
              <h2 className='text-center fw-bolder mb-4 '>LIST OF ALL EMPLOYEES</h2>
              <Hometable displayData={allUserdata} removeUser={removeUser}/>

            </div>


          </div>


      }

    </>
  )
}

export default Home