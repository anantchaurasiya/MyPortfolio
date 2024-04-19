import {Container } from "react-bootstrap";
import {FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import data from "../data";
import "./style.css";

function Contact(){
    let ResData = data;
    return(
        <Container className="contact" id="contactUs" fluid='true'>
            <h1 className="h1-name text-center p-3">Contact Me</h1>
            <h5 className="h2-name">Email: {ResData.email_id} | Mobile No: {ResData.mobile_no}</h5>
            <a href={ResData.linkedin_url} className="custom-font text-centre "><FaLinkedin /></a>
            <a href={ResData.github_url} className="custom-font" style={{color:"black"}}><FaGithubSquare /></a>
            <a href={ResData.twitter_url} className="custom-font" style={{color:"black"}}><FaSquareXTwitter /></a>
        </Container>

    );
}

export default Contact;