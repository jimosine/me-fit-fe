import { Modal } from 'react-bootstrap';
import { FaPlusCircle } from 'react-icons/fa';
import { useState } from 'react';
import AddGoalModal from './AddGoalModal';

const AddGoalButton = ({ goals, updateGoals, handleShow }) => {


    return (
        <div>
            <button className="add-goal-button"><FaPlusCircle size={50} onClick={handleShow} /></button>
            {/* <AddGoalModal show={show} onHide={handleClose} /> */}


        </div>
    )
}

export default AddGoalButton


