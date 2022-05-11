import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Naviguation = () => {
  return (
    <div>
         <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Movie App</Navbar.Brand>
    <Nav className="me-auto">
    <NavLink
            to="/"
            style={{ color:'white'
            }}
            
          >
           < Button variant="primary">Home</Button>
          </NavLink>
     
          <NavLink
            to="/addMovie"
            style={{ color:'white'
        }}
        
            
          >
            <Button variant="primary">Add Movie</Button>
          </NavLink>
    
    </Nav>
    </Container>
  </Navbar>
    </div>
  )
}

export default Naviguation