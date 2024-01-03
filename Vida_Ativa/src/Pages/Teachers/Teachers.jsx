import Listheader from "../../components/ListTeachers/ListTeachers";
import Navbar from "../../components/Navbar/Navbar";
import { MainTeachers } from "./TeachersStyled";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

function Teachers() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <MainTeachers>
      <Navbar type1="1" type2="2" state1="off" state2="on" />
      <div id="painel">
        <Button variant="primary" onClick={handleShow} className="new-teacher">
          Novo Professor
        </Button>
        <Listheader />
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </MainTeachers>
  );
}

export default Teachers;
