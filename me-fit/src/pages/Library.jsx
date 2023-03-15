import LibraryHeader from "../components/Library/LibraryHeader"
import LibraryList from "../components/Library/LibraryList";
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ContributionForm from "../components/Library/ContributionForm";


import { useState } from "react";


const Library = ({ updateContributions }) => {


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [selectedButton, setSelectedButton] = useState('Exercises');

    // Define a function to handle button clicks
    const handleButtonClick = (button) => {
        setSelectedButton(button);
    };


    const handleFormSubmit = (data) => {
        updateContributions([data])
        console.log(data);
        handleClose()

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
                            <ContributionForm onSubmit={handleFormSubmit} />

                        </Modal.Body>
                        {/* <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onSubmit={handleFormSubmit}>
                                Save Changes
                            </Button>
                        </Modal.Footer> */}
                    </Modal></Col>
            </Row>

        </div>
    )
}
export default Library