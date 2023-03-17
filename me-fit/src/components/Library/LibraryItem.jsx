import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const LibraryItem = ({ cardTitle, selectedButton }) => {
    const [lgShow, setLgShow] = useState(false);

    return (
        <>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://via.placeholder.com/640x360" />
                <Card.Body>
                    <Card.Title>{cardTitle}</Card.Title>
                    <Card.Text>
                        Very good training by a very good trainer
                    </Card.Text>
                    <Button onClick={() => setLgShow(true)} variant="success">More info</Button>

                    {/* For exercise */}
                    {selectedButton === 'Exercises' &&
                        <Modal
                            size="lg"
                            show={lgShow}
                            onHide={() => setLgShow(false)}
                            aria-labelledby="example-modal-sizes-title-lg"
                            centered
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="example-modal-sizes-title-lg">
                                    Exercise Name
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
                                        <p><h4>Muscle group:</h4> Muscle Group Name</p>
                                        <p><h4>Description:</h4> Je moet eerst duwen, dan trekken, dan op je hoofd staan. Draai dan 10 rondjes</p>

                                        <p><h4>Repetitions:</h4> 10</p>
                                        <div>
                                            <ReactPlayer
                                                url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                                                width="100%"
                                                height="300px"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Modal.Body>
                        </Modal>}

                    {/* For exercise */}
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
                                    Workout Name
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
                                        <p><h4>Type:</h4> Upper Body Circuit</p>
                                        <p><h4>Exercises:</h4>
                                            <ul>
                                                <li>Exercise 1</li>
                                                <li>Exercise 2</li>
                                                <li>Exercise 3</li>
                                            </ul>
                                        </p>
                                        <div>
                                            <ReactPlayer
                                                url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                                                width="100%"
                                                height="300px"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Modal.Body>
                        </Modal>}

                    {/* For Programs */}
                    {selectedButton === 'Programs' &&
                        <Modal
                            size="lg"
                            show={lgShow}
                            onHide={() => setLgShow(false)}
                            aria-labelledby="example-modal-sizes-title-lg"
                            centered
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="example-modal-sizes-title-lg">
                                    Program Name
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
                                        <p><h4>Type:</h4> Spartan Warrior Program</p>
                                        <p><h4>Workouts:</h4>
                                            <ul>
                                                <li>Workout 1</li>
                                                <li>Workout 2</li>
                                                <li>Workout 3</li>
                                            </ul>
                                        </p>
                                        <div>
                                            <ReactPlayer
                                                url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                                                width="100%"
                                                height="300px"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Modal.Body>
                        </Modal>}

                </Card.Body>
            </Card></>
    );
}

// Export the component
export default LibraryItem

