import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const ExerciseItem = ({ cardTitle, selectedButton, exercise }) => {
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <Card className="cardStyle" style={{ width: '18rem' }}>
        <Card.Img
          variant="top"
          src={exercise.imglink}
          className="ExerciseItem-img"
        />
        <Card.Body>
          <Card.Title>{cardTitle}</Card.Title>
          {/* <Card.Text>
                        Very good training by a very good trainer
                    </Card.Text> */}
          <Button
            className="buttonEdit"
            onClick={() => setLgShow(true)}
            variant="success"
          >
            More info{' '}
          </Button>

          {/* For exercise */}
          {selectedButton === 'Exercises' && (
            <Modal
              size="lg"
              show={lgShow}
              onHide={() => setLgShow(false)}
              aria-labelledby="example-modal-sizes-title-lg"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                  {exercise.name}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div style={{ display: 'flex' }}>
                  <img
                    src={exercise.imglink}
                    alt="exercise"
                    style={{ marginRight: '20px', width: '50%' }}
                  />
                  <div style={{ width: '50%' }}>
                    <p>
                      <h4>Muscle group:</h4> {exercise.musclegroup}
                    </p>
                    <p>
                      <h4>Description:</h4> {exercise.description}
                    </p>

                    <p>
                      <h4>Repetitions:</h4> {exercise.repetitions}
                    </p>
                    <div>
                      <ReactPlayer
                        url={exercise.vidlink}
                        width="100%"
                        height="300px"
                      />
                    </div>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

// Export the component
export default ExerciseItem;
