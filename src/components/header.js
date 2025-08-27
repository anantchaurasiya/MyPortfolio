import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import DownloadButton from '../components/downloadbtn';
import './style.css';
import data from '../data';


function Header() {
    let ResData = data;
    return(
        <>
            <Container fluid='true' id='home' className='shadow' data-scroll-to="home">
                <Row  align-items="center" className="align-items-center" > 
                    <Col>
                        <h1 style={{margin:'25% 0 1% 10%'}}> 
                            <span className='h1-name' style={{fontWeight:'bold', marginBottom:'10%'}}>HI THERE!</span> <br/> 
                            <span className='h1-name'style={{fontWeight:'bold', fontSize:'125%',letterSpacing:'1px'}}>I'M </span>
                            <span className='h1-name'style={{color:'#FFAF45', fontSize:'125%', letterSpacing:'0.5px'}}>{ResData.fname}</span>
                        </h1>
                        <h4 style={{margin:'2% 0 2% 10%'}}> <span style={{background:'#FFAF45', padding:'2px 5px 2px 5px', letterSpacing:'0.5px', fontWeight:'bold'}} className='p-text mb-xs-05'>SOFTWARE ENGINEER</span></h4>
                        <DownloadButton fileUrl={ResData.Resume_url} fileName={ResData.file_name} />
                    </Col>
                    <Col>
                        <Image src={data.profic_pic} className="profile_pic" />
                    </Col>
                </Row>
            </Container>
            {/* <About />
            <Work />
            <Skills />
            <Project />
            <Education />
            <Contact /> */}
        </>
    );
}

export default Header;