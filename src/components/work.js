import { Container, Row, Col,Figure } from "react-bootstrap";
import data from "../data";

function Work(){

    let ResDate = data;
    return(
        <Container fluid='true' id="work" data-scroll-to="work">
            <h1 className="text-center p-3 h1-name"> Work History</h1>
            {ResDate.work_experience.map((item)=>
                        <Row>
                            <Col>
                            <Figure.Image className="work-logo"
                                        width={180}
                                        height={180}
                                        alt={item.point}
                                        src={item.logo}
                                    />
                            </Col>
                            <Col>
                                <h5 className="h2-name">{item.cname}</h5>
                                <h6 className="h3-name">{item.role}</h6>
                                <h6 className="h3-name">{item["start-date"]} - {item["end-date"]}</h6>
                                <p className="p-text">Tech-Stack used: {item.tech_used}</p>
                            </Col>   
                        </Row>
                    )}
        </Container>

    );


}

export default Work;