import { Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { BiMenu, BiAlarm, BiMovie } from 'react-icons/bi';
import { AiTwotoneMail } from 'react-icons/ai';


const Footer = ({ leftdrawer, rightdrawer, bottomMenu }) => {
    return (
        <>
            <Navbar bg="secondary" expand="false" className="p-3" style={{ display: 'flex', flexWrap: "row" }}>
                {leftdrawer && <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} style={{ border: "0px" }} ><BiMenu style={{ color: "white", fontSize: "2rem " }} /></Navbar.Toggle>
                }

                {bottomMenu && <Nav className="me-auto" style={{ width: "90%" }}>
                    <Container fluid className="d-flex justify-content-center " >
                        <Nav.Item>
                            <Nav.Link className='px-2 navtext' style={{ color: "white", fontWeight: "bolder" }}><AiTwotoneMail />MAILS</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='px-2 navtext' style={{ color: "white", fontWeight: "bolder" }}> <BiAlarm /> ALARM</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='px-2 navtext' style={{ color: "white", fontWeight: "bolder" }}> <BiMovie /> MOVIE</Nav.Link>
                        </Nav.Item>
                    </Container>
                </Nav>}

                {rightdrawer && <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} style={{ border: "0px" }} ><BiMenu style={{ color: "white", fontSize: "2rem " }} /></Navbar.Toggle>
                }
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
                {/* </Container> */}
            </Navbar>
        </>
    );
}

export default Footer;