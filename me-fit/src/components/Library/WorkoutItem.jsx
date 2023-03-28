import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';

const WorkoutItem = ({ cardTitle, selectedButton, workout, exercises }) => {
  const [lgShow, setLgShow] = useState(false);

  const workoutsIds = workout.exercisesId;
  const workoutsNames = exercises.filter((item) =>
    workoutsIds.includes(item.id)
  ); //.map(item => item.name)

  return (
    <>
      <Card className="cardStyle" style={{ width: '18rem' }}>
        <Card.Img
          variant="top"
          src={workout.imglink}
          className="ExerciseItem-img"
        />
        <Card.Body>
          <Card.Title>{cardTitle}</Card.Title>
          <Card.Text style={{ height: '120px' }}>
            {workout.description_short}
            {/* {program.description} */}
          </Card.Text>
          <Button
            className="buttonEdit"
            onClick={() => setLgShow(true)}
            variant="success"
          >
            More info
          </Button>

          {/* For Programs */}
          {selectedButton === 'Workouts' && (
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
                    src={workout.imglink}
                    alt="workout"
                    style={{ marginRight: '20px', width: '50%' }}
                  />
                  <div style={{ width: '50%' }}>
                    <p>
                      <h4>Type:</h4> {workout.type}
                    </p>
                    <p>
                      <h4>Exercises:</h4>
                    </p>
                    <ul>
                      {workoutsNames.map((item) => (
                        <li key={item.id}>{item.name}</li>
                      ))}
                    </ul>

                    <p>
                      <h4>Description:</h4> {workout.description_long}
                    </p>
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
export default WorkoutItem;
