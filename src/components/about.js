import {Container,Row,Col, Image} from "react-bootstrap";
import {FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import "./style.css";
import data from "../data";
function About(){
    let ResData = data;
    return(
        <Container id="about">
            <Row> 
                <h1 className="text-center p-3 h1-name"> About Me</h1>
                <Col>
                <Image className="profile" src={ResData.profic_pic} roundedCircle/>
                </Col>
                <Col>
                <p className="p-text"> I am professional experience in designing, developing, and implementing software solutions. a love of lifelong learning and staying current with new technology. capable of working with cross-functional teams to assess client requirements and meet deadlines while producing high-quality software.</p>
                <a href={ResData.linkedin_url} className="custom-font"><FaLinkedin /></a>
                <a href={ResData.github_url} className="custom-font" style={{color:"black"}}><FaGithubSquare /></a>
                <a href={ResData.twitter_url} className="custom-font" style={{color:"black"}}><FaSquareXTwitter /></a>
                </Col>
            </Row>
        </Container>
    );


}
export default About;