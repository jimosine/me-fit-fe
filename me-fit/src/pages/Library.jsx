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
        //handle de .value shit:
        //PROGRAMS:
        if (data.Type.value === "Program") {
            data.Type = data.Type.value
            data.programType = data.programType.value
        } else if (data.Type.value === "Workout") {
            data.Type = data.Type.value
            data.workoutType = data.workoutType.value

        }

        updateContributions([data])
        console.log(data);
        //EERST EEN POST MET ALLES BEHALVE WORKOUTS/EXERCISES
        //DAN EEN UPDATE MET WORKOUTS/EXERCISES
        handleClose()

    };

    return (
        <div>
            <Row >
                {/* <Col>Search stuff</Col> */}
                <Col ><LibraryHeader selectedButton={selectedButton} handleButtonClick={handleButtonClick} /></Col>
                {/* <Col></Col> */}
            </Row>
            <Row>
                <Col>Filter stuff</Col>
                <Col xs={7}><LibraryList selectedButton={selectedButton} /></Col>
                <Col>
                    <Button variant="primary" onClick={handleShow}>
                        Add new contribution
                    </Button>


                    <Modal
                        show={show}
                        onHide={handleClose}
                        aria-labelledby="contained-modal-title-vcenter"
                        centered>
                        <Modal.Header
                            closeButton
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }} >
                            <Modal.Title className="ms-auto" >Contribution Form</Modal.Title>
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

        </div >
    )
}
export default Library