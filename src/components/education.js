import { Col, Container, Figure, Row } from "react-bootstrap";
import data from "../data";

function Education (){
    let ResData = data;
    return(
        <Container id="education" fluid='true'>
            <h1 className="h1-name text-center p-3">Education</h1>
            {
                ResData.education.map((item)=>
                <Row key={item.Uname}>
                    <Col>
                    <Figure.Image className="edu-logo"
                                        width={120}
                                        height={80}
                                        alt={item.point}
                                        src={item.logo}
                                    />
                    </Col>
                    <Col>
                    <h5 className="h2-name">{item.Uname}</h5>
                    <h6 className="h3-name">{item.Degree}</h6>
                    <h6 className="h3-name">{item["start-date"]} - {item["end-date"]}</h6>
                </Col>
                </Row>
                )
            }
        </Container>
    );
}

export default Education;