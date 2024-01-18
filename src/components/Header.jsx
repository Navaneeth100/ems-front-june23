import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {

 
  return (
    <div>
      <Navbar style={{height:"80px"}} className="bg-success">
        <Container>
          <Navbar.Brand className='fw-bolder text-light '>

            <Link to={'/'} style={{textDecoration:"none",color:"white"}}>
              <i class="fa-sharp fa-solid fa-people-group fa-bounce me-2" ></i>
              EMS-APPLICATION
            </Link>

          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header