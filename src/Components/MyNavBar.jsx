import React from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";

const MyNavBar = () =>{
return (

    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className="text-white"href="#home">EpiBooks</Navbar.Brand>
          <Nav className="ms-auto ">
          <Form.Select aria-label="Default select example" size="sm">
      <option>Categoria</option>
      <option value="1">fantasy</option>
      <option value="2">history</option>
      <option value="3">horror</option>
      <option value="4">romance</option>
      <option value="5">scifi</option>
      </Form.Select>
            <Nav.Link className="text-white" href="#home">Home</Nav.Link>
            <Nav.Link className="text-white" href="#features">About</Nav.Link>
            <Nav.Link className="text-white" href="#pricing">Browse</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      </>
)


}

export default MyNavBar