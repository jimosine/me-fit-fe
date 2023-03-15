import { useState } from "react";
import { Modal } from 'react-bootstrap';

import DashboardHeader from "../components/Dashboard/DashboardHeader";
import GoalsList from "../components/Dashboard/GoalsList"
import AddGoalButton from "../components/Dashboard/AddGoalButton";
import GoalForm from "../components/Dashboard/GoalForm";



const Dashboard = ({ goals, addGoals, setGoals }) => {

    // const [goals, setGoals] = useState([]);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const handleFormSubmit = (data) => {
        // updateContributions([data])
        console.log(data);
        if (data.Type === "Workout") {
            data.ProgramID = []
        } else if (data.Type === "Program") {
            data.WorkoutID = []
        }

        // Add UserID & isCompleted to the form data
        data.UserID = 1
        data.completed = false

        // Save the form data and update the form submission status
        // Update the goals list state
        //setFormData(data);
        addGoals([data])
        handleClose()

    };

    //Function passed down to add a new goal by setting the state
    // function addGoals(goal) {
    //     setGoals(goals.concat(goal));
    //     //setGoals(...goals, goal);
    // }

    //Function passed down to remove a goal by setting the state
    function removeGoals(goal) {
        setGoals(goals.filter(function (item) {
            return item !== goal
        }))
    }


    return (

        <div className="App">
            <DashboardHeader />
            <GoalsList goals={goals} removeGoals={removeGoals} />
            <AddGoalButton goal={goals} handleShow={handleShow} updateGoals={addGoals} />

            {/* <AddGoalModal show={show} onHide={handleClose} /> */}
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title className="ms-auto">Add a new goal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <GoalForm onSubmit={handleFormSubmit} updateGoals={addGoals} />
                </Modal.Body>
            </Modal>



        </div>

    )

}

export default Dashboard