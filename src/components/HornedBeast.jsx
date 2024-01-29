import { useState } from "react";
import Card from "react-bootstrap/Card";

function HornedBest(props) {
  const [likes, setLikes] = useState(0);

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  return (
    <Card style={{ width: "18rem", marginTop: "3rem" }}>
      <Card.Img variant="top" src={props.imageUrl} onClick={handleLikeClick} style={{ cursor: "pointer", objectFit: "cover", height: "18rem", width: "17.89rem", margin: "auto", display: "block" }} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Footer>Likes: {likes}</Card.Footer>
      </Card.Body>
    </Card>
  );
}

export default HornedBest;