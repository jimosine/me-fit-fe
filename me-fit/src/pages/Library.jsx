import LibraryHeader from "../components/Library/LibraryHeader"
import LibraryList from "../components/Library/LibraryList";
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ContributionForm from "../components/Library/ContributionForm";
import { isContributorRole } from "../utils/user"
import { useNavigate } from "react-router-dom";
import { FaPlusCircle } from 'react-icons/fa';


import { useState } from "react";


const Library = ({ setContributions, contributions, updateContributions }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [selectedButton, setSelectedButton] = useState('Workouts');

    // Define a function to handle button clicks
    const handleButtonClick = (button) => {
        setSelectedButton(button);
    };


    const handleFormSubmit = (data) => {

        //PROGRAMS:
        if (data.Type.value === "Program") {
            data.Type = data.Type.value
            data.programType = data.programType.value

            //Workout:
        } else if (data.Type.value === "Workout") {
            data.Type = data.Type.value
            data.workoutType = data.workoutType.value

            //Exercise
        } else if (data.Type.value === "Exercise") {
            data.Type = data.Type.value
            data.musclegroup = data.musclegroup.value
            console.log("posting exercise")
        }

        //IF EXERCISE
        if (data.Type === "Exercise") {


            //EERST EEN POST MET ALLES BEHALVE WORKOUTS/EXERCISES
            fetch("https://me-fit-nl.azurewebsites.net/exercise", {
                method: "POST",
                body: JSON.stringify({
                    "name": data.name,
                    "description": data.description,
                    "musclegroup": data.musclegroup,
                    "vidlink": data.vidlink,
                    "imglink": data.imglink,
                    "repetitions": data.repetitions,
                    "profileId": 3
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then((response) => console.log(response))
        }





        //SLUIT DE FORM MODAL
        handleClose()

        updateContributions([data])
        setContributions(contributions.concat([data]));
        contributions = contributions.concat([data])


    };

    return (
        <div>
            <Row >
                <Col ><LibraryHeader selectedButton={selectedButton} handleButtonClick={handleButtonClick} /></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col xs={8}><LibraryList show={show} selectedButton={selectedButton} contributions={contributions} /></Col>
                <Col>
                    {isContributorRole() && <button className="add-goal-button"><FaPlusCircle size={50} onClick={handleShow} /></button>}

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

                    </Modal></Col>
            </Row>

        </div >
    )
}
export default Library