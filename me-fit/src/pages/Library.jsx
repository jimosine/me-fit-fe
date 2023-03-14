import LibraryHeader from "../components/Library/LibraryHeader"
import LibraryList from "../components/Library/LibraryList";
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


import { useState } from "react";


const Library = () => {


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [selectedButton, setSelectedButton] = useState('Exercises');
    // Define a function to handle button clicks
    const handleButtonClick = (button) => {
        setSelectedButton(button);
    };

    return (
        <div>
            <Row >
                <Col>Search stuff</Col>
                <Col xs={7}><LibraryHeader selectedButton={selectedButton} handleButtonClick={handleButtonClick} /></Col>
                <Col></Col>
            </Row>
            <Row>
                <Col>Filter stuff</Col>
                <Col xs={7}><LibraryList selectedButton={selectedButton} /></Col>
                <Col>
                    <Button variant="primary" onClick={handleShow}>
                        Add new contribution
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>New contribution...</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Type</Form.Label>
                                    <Form.Select>
                                        <option>Program</option>
                                        <option>Workout</option>
                                        <option>Exercise</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlTextarea1"
                                >
                                    <Form.Label>Example textarea</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
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
                    </Modal></Col>
            </Row>

        </div>
    )
}
export default Library