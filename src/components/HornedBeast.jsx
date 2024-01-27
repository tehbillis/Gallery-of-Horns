import { useState } from "react";

function HornedBest(props) {
  const [likes, setLikes] = useState(0);

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  return (
    <section>
      <h2>{props.title}</h2>
      <img src={props.imageUrl} alt={props.description} title={props.title} onClick={handleLikeClick}/>
      <p>{props.description}</p>
      <p>Likes: {likes}</p>
    </section>
  );
}

export default HornedBest;