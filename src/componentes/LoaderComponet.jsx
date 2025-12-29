import React from 'react'
import { Spinner } from 'react-bootstrap'

const LoaderComponet = () => {
  return (
    <div style={{width:'100%',height:'90vh',display:'flex',justifyContent:'center' ,alignItems:'center'}}>
      <Spinner animation="grow" variant="secondary" />
    </div>
  )
}

export default LoaderComponet
