import LibraryHeader from "../components/Library/LibraryHeader"
import LibraryList from "../components/Library/LibraryList";
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ContributionForm from "../components/Library/ContributionForm";
import { Navigate } from "react-router-dom";


import { useState } from "react";
import { storageDelete, storageSave } from "../utils/storage";


const Library = ({ updateContributions, contributions }) => {


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

        } else if (data.Type.value === "Exercise") {
            data.musclegroup = data.musclegroup.value
            console.log("posting exercise")
        }

        console.log(data);
        updateContributions([data])



        //EERST EEN POST MET ALLES BEHALVE WORKOUTS/EXERCISES
        fetch("https://me-fit-nl.azurewebsites.net/exercise", {
            // fetch("https://cors-anywhere.herokuapp.com/https://me-fit-nl.azurewebsites.net/exercise", {
            method: "POST",
            body: JSON.stringify({
                "name": data.name,
                "description": data.description,
                "musclegroup": data.musclegroup,
                "vidlink": data.vidlink,
                "imglink": data.imglink,
                "repetitions": data.repetitions
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then((response) => console.log(response))



        // storageSave('contributions', contributions)



        //SLUIT DE FORM MODAL
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
                <Col xs={8}><LibraryList selectedButton={selectedButton} /></Col>
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