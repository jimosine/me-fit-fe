import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useState } from 'react';


const AddGoalModal = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title className="ms-auto">Add a new goal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* <ContributionForm onSubmit={handleFormSubmit} /> */}
                <p>hoi</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddGoalModal