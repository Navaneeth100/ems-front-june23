import React from 'react'
import Spinner from 'react-bootstrap/Spinner';






function LoadingSpinner() {
  return (
    <div className='d-flex justify-content-center align-item-center m-5'>
        <Spinner animation="border" variant="success" className='me-1'/> <span style={{fontSize:"20px",fontWeight:"bolder"}} className='m-1'>Loading.......</span>
    </div>
  )
}

export default LoadingSpinner