import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import { storageRead } from '../../utils/storage';

const ProgramItem = ({ cardTitle, selectedButton, program }) => {
  const [lgShow, setLgShow] = useState(false);

  //TO ALSO GET THE WORKOUT NAMES
  const workoutsIds = program.workoutsId;
  const workouts = storageRead('workouts');
  const correctWorkouts = workouts.filter((item) =>
    workoutsIds.includes(item.id)
  );
  const workoutNames = correctWorkouts.map((item) => item.name);

  return (
    <>
      <Card className="cardStyle" style={{ width: '18rem' }}>
        <Card.Img
          variant="top"
          src={program.imglink}
          className="ProgramItem-img"
        />
        <Card.Body>
          <Card.Title>{cardTitle}</Card.Title>
          <Card.Text style={{ height: '85px' }}>
            {program.description_short}
          </Card.Text>
          <Button
            className="buttonEdit"
            onClick={() => setLgShow(true)}
            variant="success"
          >
            More info
          </Button>

          {/* For Programs */}
          {selectedButton === 'Programs' && (
            <Modal
              size="lg"
              show={lgShow}
              onHide={() => setLgShow(false)}
              aria-labelledby="example-modal-sizes-title-lg"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                  {program.name}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div style={{ display: 'flex' }}>
                  <img
                    src={program.imglink}
                    alt="exercise"
                    style={{ marginRight: '20px', width: '50%' }}
                  />
                  <div style={{ width: '50%' }}>
                    <h4>Type:</h4> <p>{program.type}</p>
                    <h4>Workouts:</h4>
                    <ul>
                      {workoutNames.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <h4>Description:</h4> <p>{program.description_long}</p>
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
export default ProgramItem;
