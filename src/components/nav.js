import { Navbar, Nav, Container} from "react-bootstrap";
import { useState,useEffect } from "react";

function NavBaar (){
  // State to keep track of active section
  const [activeSection, setActiveSection] = useState('');

  
  // Effect to update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-scroll-to]');
      let currentSectionId = '';

      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          currentSectionId = element.getAttribute('data-scroll-to');
        }
      });

      setActiveSection(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Scroll to section when Navbar link is clicked
  const handleNavLinkClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 50, // Adjust for Navbar height
        behavior: 'smooth',
      });
    }
  };


    return(
    <>
    <Navbar fixed="top" expand="lg" className="navbar">
        <Container  fluid='true'>
        <Navbar.Toggle aria-controls="basic-navbar-nav navtoggle" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav">
              <Nav.Link href="#home" onClick={() => handleNavLinkClick('home')} active={activeSection === 'home'}>Home</Nav.Link>
              <Nav.Link href="#about" onClick={() => handleNavLinkClick('about')} active={activeSection === 'about'}>About</Nav.Link>
              <Nav.Link href="#work" onClick={() => handleNavLinkClick('work')} active={activeSection === 'work'}>Work</Nav.Link>
              <Nav.Link href="#skill" onClick={() => handleNavLinkClick('skill')} active={activeSection === 'skill'}>Skills</Nav.Link>
              <Nav.Link href="#project" onClick={() => handleNavLinkClick('project')} active={activeSection === 'project'}>Project</Nav.Link>
              <Nav.Link href="#education" onClick={() => handleNavLinkClick('education')} active={activeSection === 'education'}>Education</Nav.Link>
              <Nav.Link href="#contactUs" onClick={() => handleNavLinkClick('contactUs')} active={activeSection === 'contactUs'}>Contact Us</Nav.Link>
              {/* <Nav.Link href="#contact me">Contact me</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    );
}

export default NavBaar;