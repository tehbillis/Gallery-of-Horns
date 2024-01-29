import HornedBeast from "./HornedBeast";
import hornedBeastData from "../data/data.json";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function Gallery() {
  return (
    <Container>
      <Row>
          {hornedBeastData.map(beast => <Col key={beast._id} xl={3} lg={4} md={6} sm={12}><HornedBeast key={beast._id} imageUrl={beast.image_url} title={beast.title} description={beast.description} keyword={beast.keyword} horns={beast.horns} /></Col>)}
      </Row>
    </Container>
  ); 
}

export default Gallery;