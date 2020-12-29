import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

class NavbarMain extends React.Component{
    render() {
        return (
          <div className="wrapper">
            <div className="App">
              <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Learning Hub</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <NavDropdown title="Themes" id="basic-nav-dropdown">
                      <NavDropdown.Item href="/backend">Backend</NavDropdown.Item>
                      <NavDropdown.Item href="/frontend">Frontend</NavDropdown.Item>
                      <NavDropdown.Item href="/styling">Styling</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="/university">University</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </div>
        )
      }
}
export default NavbarMain;