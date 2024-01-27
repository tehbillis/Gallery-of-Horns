import HornedBeast from "./HornedBeast";
import hornedBeastData from "../data/data.json";

function Gallery() {
  return (
    <main>
      {hornedBeastData.map(beast => <HornedBeast key={beast._id} imageUrl={beast.image_url} title={beast.title} description={beast.description} keyword={beast.keyword} horns={beast.horns} />)}
    </main>
  ); 
}

export default Gallery;