import { Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { BiMenu } from 'react-icons/bi';

import logo from "./Images/rcb.jpg";

const Header = ({ logoPosition, color, leftdrawer, rightdrawer, showtabs }) => {

    return (
        <>
            <Navbar bg="" expand="false" className="p-3" style={{ display: 'flex', flexWrap: "row", background: `${color}` }}>
                {leftdrawer && <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} style={{ border: "0px" }} ><BiMenu style={{ color: "white", fontSize: "2rem " }} /></Navbar.Toggle>}

                <Nav className="me-auto" style={{ width: "90%" }}>
                    <Container fluid className={`d-flex justify-content-${logoPosition}`}>
                        <Navbar.Brand href="#" >
                            <img src={logo} width="250" height="100" className="d-inline-block align-top" alt="tigeenlogo logo" />
                        </Navbar.Brand>
                    </Container>
                </Nav>

                {rightdrawer && <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} style={{ border: "0px" }} ><BiMenu style={{ color: "white", fontSize: "2rem " }} /></Navbar.Toggle>}
                <Navbar.Offcanvas id={`offcanvasNavbar-expand-lg`} aria-labelledby={`offcanvasNavbarLabel-expand-lg`} placement="start" >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                            Offcanvas
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>
                            <NavDropdown
                                title="Dropdown"
                                id={`offcanvasNavbarDropdown-expand-lg`}
                            >
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Navbar>


            {showtabs && <Navbar bg="" expand="false" className=" d-flex justify-content-start" style={{ background: `${color}` }}>
                <Nav.Link className='mx-2 tabtext' style={{ color: "white", fontWeight: "500" }}>TAB ONE</Nav.Link>
                <Nav.Link className='mx-2 tabtext' style={{ color: "white", fontWeight: "500" }}>TAB TWO</Nav.Link>
                <Nav.Link className='mx-2 tabtext' style={{ color: "white", fontWeight: "500" }}>TAB THREE</Nav.Link>
            </Navbar>}

        </>
    );
}

export default Header;