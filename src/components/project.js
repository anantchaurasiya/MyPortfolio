import { Col, Container, Row,Carousel } from "react-bootstrap";
import ReadMoreParagraph from "./readMore";
import data from "../data";

function Project(){
    let ResData = data;
    return(
            <Container id="project" data-scroll-to="project">
                <h1 className="h1-name text-center p-3"> Project</h1>
                {ResData.project.map((item)=>
                    <div key={item.pname}>
                        <Row className="mb-2">
                            <Col>
                                <Carousel className="project-carousel">
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src={item["h-image"]}
                                        alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src={item["h-image2"]}
                                        alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src={item["l-image"]}
                                        alt="First slide"
                                        />
                                    </Carousel.Item>
                                </Carousel>
                            </Col>
                            <Col>
                            <h5 className="h2-name">{item.pname}</h5>
                            <h6 className="h3-name">{item.role}</h6>
                            <h6 className="h3-name">{item["start-date"]} - {item["end-date"]}</h6>
                            <ReadMoreParagraph text={item.desc} maxLength={100}/>
                            <p className="p-text"> <span>Tech-Stack used:</span> {item.tech_used}</p>
                            </Col>
                        </Row>
                    </div>
                )}
               
            </Container>
    );
}

export default Project;