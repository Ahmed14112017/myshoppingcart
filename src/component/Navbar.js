import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Nav, Navbar as Navbarps ,Button } from 'react-bootstrap'
import { CiShoppingCart } from "react-icons/ci";

export default function Navbar() {
  return (
    <Navbarps sticky='top' className='bg-white shadow-sm mb-3'>
        <Container>
            <Nav className='mo-auto'>
            <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
            <Nav.Link to="Store"as={NavLink}>Store</Nav.Link>
            <Nav.Link to="About"as={NavLink}>About</Nav.Link>
            </Nav>
            <Button variant='outline-primary' className='rounded-circle 'style={{width:"3rem",height:"3rem",position:"relative"}}>
            
            <CiShoppingCart style={{display:"flex",fontSize:"20px"}} />
            <div className='bg-danger rounded-circle d-flex justify-content-center' style={{position:"absolute",width:"20px",color:"white",bottom:"0",right:"0",transform:"translate(25%,25%)" }}>
                3
            </div>

            </Button>
       
        </Container>
     
    </Navbarps>
  )
}
