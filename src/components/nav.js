import { Navbar, Nav, Container} from "react-bootstrap";

function NavBaar (){
    return(
    <>
    <Navbar fixed="top" expand="lg" className="navbar">
        <Container  fluid='true'>
        <Navbar.Toggle aria-controls="basic-navbar-nav navtoggle" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#work">Work</Nav.Link>
              <Nav.Link href="#skill">Skills</Nav.Link>
              <Nav.Link href="#project">Project</Nav.Link>
              <Nav.Link href="#education">Education</Nav.Link>
              <Nav.Link href="#contactUs">Contact Us</Nav.Link>
              {/* <Nav.Link href="#contact me">Contact me</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    );
}

export default NavBaar;