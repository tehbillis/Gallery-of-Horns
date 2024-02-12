import HornedBeast from "./HornedBeast";
import hornedBeastData from "../data/data.json";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { FormGroup } from "react-bootstrap";

function Gallery() {
  const [beastData, setBeastData] = useState(hornedBeastData);
  const [selectedHorns, setSelectedHorns] = useState("x");
  const dropdownData = [];

  // Populate and sort dropdownData array
  hornedBeastData.forEach(beast => { if (!dropdownData.includes(beast.horns)) dropdownData.push(beast.horns) });
  dropdownData.sort((a, b) => a - b);

  const filter = (event) => {
    // If no horns are selected, display default list of beasts. Otherwise, display beasts with the selcted number of horns
    event.target.value === 'x' ? setBeastData(hornedBeastData) : setBeastData(hornedBeastData.filter(beast => { if (beast.horns === parseInt(event.target.value)) return beast; }));

    // Keeping track of the selected number of horns
    setSelectedHorns(event.target.value);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <FormGroup>
              <Form.Select value={selectedHorns} onChange={filter}>
                <option value="x">Filter By Number Of Horns</option>
                {dropdownData.map(horns => <option key={horns} value={horns}>{horns}</option>)}
              </Form.Select>
            </FormGroup>
          </Form>
        </Col>
      </Row>
      <Row>
          {beastData.map(beast => <Col key={beast._id} xl={3} lg={4} md={6} sm={12}><HornedBeast key={beast._id} imageUrl={beast.image_url} title={beast.title} description={beast.description} keyword={beast.keyword} horns={beast.horns} /></Col>)}
      </Row>
    </Container>
  ); 
}

export default Gallery;