import { Col, Container, Row } from "react-bootstrap";
import data from "../data";

function Project(){
    let ResData = data;
    return(
            <Container id="project">
                <h1 className="h1-name text-center p-3"> Project</h1>
                {ResData.project.map((item)=>
                    <div key={item.pname}>
                        <Row>
                            <Col></Col>
                            <Col>
                            <h5 className="h2-name">{item.pname}</h5>
                            <h6 className="h3-name">{item.role}</h6>
                            <h6 className="h3-name">{item["start-date"]} - {item["end-date"]}</h6>
                            <p className="p-text">{item.desc}</p>
                            <p className="p-text"> <span>Tech-Stack used:</span> {item.tech_used}</p>
                            </Col>
                        </Row>
                    </div>
                )}
               
            </Container>
    );
}

export default Project;