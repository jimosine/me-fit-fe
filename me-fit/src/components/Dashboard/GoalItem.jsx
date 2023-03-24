import Accordion from 'react-bootstrap/Accordion';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { storageDelete } from '../../utils/storage';

const GoalItem = ({ goal, removeGoals, index }) => {

    //PROGRESS PROCENT
    const [checkedCount, setCheckedCount] = useState(0);

    //Update the state by filtering the goal array for the current goal item
    const handleButtonClick = () => {
        removeGoals(goal)

        //EN GOOI UIT DE API & STORAGE
        // storageDelete('goals')
    }

    const handleCheckboxChange = (event) => {
        if (event.target.checked) {
            setCheckedCount(checkedCount + 1);
        } else {
            setCheckedCount(checkedCount - 1);
        }
    }

    let progress = 0
    if (goal.type === "Program") {
        progress = (checkedCount / goal.programsId.length) * 100;
    } else {
        progress = 100
    }


    return (


        //If Type === Program, don't show the empty workout array, and vice versa.
        <div className='goal-item'>
            <Accordion.Item eventKey={`${index}`} style={{ border: "none" }}>
                <Accordion.Header>{goal.name} and {index}</Accordion.Header>
                <Accordion.Body>
                    {goal.type === "Program" &&
                        <div style={{
                            width: "50%",
                            marginLeft: "25%",
                            backgroundColor: "rgba(211, 211, 211, 0.8)",
                            padding: "10px",
                            borderRadius: "15px",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
                        }}>
                            <p style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <span style={{ fontWeight: "bold" }}>Due date:</span>
                                <span>{goal.enddate}</span>
                            </p>
                            <p style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <span style={{ fontWeight: "bold" }}>Type:</span>
                                <span>{goal.type}</span>
                            </p>
                            <p style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <span style={{ fontWeight: "bold" }}>Workouts:</span>
                            </p>

                            <p style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <span style={{ fontWeight: "bold" }}>Progress:</span>
                            </p>
                            <span><ProgressBar now={progress} label={`${progress}%`} /></span>
                            <div className='contribution-form-buttons'>
                                <Button className='contribution-form-button' variant="danger" onClick={handleButtonClick} >
                                    Remove
                                </Button>
                                <Button variant="primary">
                                    Edit goal
                                </Button>
                            </div>
                        </div>
                    }

                    {goal.type === "Workout" &&
                        <li>
                            {goal.name} /
                            {goal.type} /
                            {goal.enddate} /
                            {goal.completed.toString()} /
                            {goal.workouts.map(item => item.label + " | ")} /
                        </li>
                    }

                </Accordion.Body>
            </Accordion.Item>
        </div >
    )

}

export default GoalItem