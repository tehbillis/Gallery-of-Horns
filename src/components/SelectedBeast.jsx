import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";

function SelectedBeast(props) {
  console.log(props.imageUrl);

  return (
    <Modal show={true} onHide={props.onHide} size="xl" centered>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image src={props.imageUrl} style={{ marginLeft: "auto", marginRight: "auto", display: "block" }} fluid />
        <p>{props.description}</p>
      </Modal.Body>
    </Modal>
  );
}

export default SelectedBeast;