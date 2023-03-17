import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';

const WorkoutItem = ({ cardTitle, selectedButton, workout }) => {
    const [lgShow, setLgShow] = useState(false);

    //const workoutsIds = program.workoutsId


    return (
        <>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://via.placeholder.com/640x360" />
                <Card.Body>
                    <Card.Title>{cardTitle}</Card.Title>
                    <Card.Text>
                        Very good training by a very good trainer
                        {/* {program.description} */}
                    </Card.Text>
                    <Button onClick={() => setLgShow(true)} variant="success">More info</Button>

                    {/* For Programs */}
                    {selectedButton === 'Workouts' &&
                        <Modal
                            size="lg"
                            show={lgShow}
                            onHide={() => setLgShow(false)}
                            aria-labelledby="example-modal-sizes-title-lg"
                            centered
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="example-modal-sizes-title-lg">
                                    {workout.name}
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div style={{ display: 'flex' }}>
                                    <img
                                        src="https://image-placeholder.com/images/actual-size/375x500.png"
                                        alt="exercise"
                                        style={{ marginRight: '20px', width: '50%' }}
                                    />
                                    <div style={{ width: '50%' }}>
                                        <p><h4>Type:</h4> {workout.type}</p>
                                        <p><h4>Exercises:</h4>
                                            <ul>
                                                {workout.exercisesId.map(item => (<li key={item}>{item}</li>))}

                                            </ul>
                                        </p>
                                        <p><h4>Description:</h4> Hier komt de beschrijving</p>
                                    </div>
                                </div>
                            </Modal.Body>
                        </Modal>}

                </Card.Body>
            </Card></>
    );
}

// Export the component
export default WorkoutItem

