import { FaPlusCircle } from 'react-icons/fa';

const AddGoalButton = ({ handleShow }) => {


    return (
        <div>
            <button className="add-goal-button"><FaPlusCircle size={50} onClick={handleShow} /></button>
        </div>
    )
}

export default AddGoalButton


