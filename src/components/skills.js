import {Container,Figure } from "react-bootstrap";
import data from "../data";

function Skills(){
    let ResData = data;
    return(
        <Container id="skill" data-scroll-to="skill">
            <h1 className="h1-name text-center p-3">Skills</h1>
                {
                    ResData.Skills.map((item)=>{
                        return(
                            <>
                                <Figure className="m-3"> 
                                    <Figure.Image className="skill-image"
                                        width={100}
                                        height={120}
                                        alt={item.point}
                                        src={`/${item.logo}`}
                                    />
                                    <Figure.Caption className="text-center">
                                    {item.tstack}
                                    </Figure.Caption>
                                </Figure> 
                            </>
                        );
                    })
                }     
        </Container>
    );

}

export default Skills;