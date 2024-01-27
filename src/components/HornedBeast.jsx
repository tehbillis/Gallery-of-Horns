function HornedBest(props) {
  return (
    <section>
      <h2>{props.title}</h2>
      <img src={props.imageUrl} alt={props.description} title={props.title} />
      <p>{props.description}</p>
    </section>
  );
}

export default HornedBest;