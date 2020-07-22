import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Home from './components/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/App.css'

function App() {
  return (
    <div className="wrapper">
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Learning Hub</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <NavDropdown title="Themes" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Backend</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Frontend</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Styling</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">University</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>,
        <Home />
      </div>
    </div>
  )
}
export default App;
