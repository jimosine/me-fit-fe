import { useState } from "react";
import { Modal } from 'react-bootstrap';

import DashboardHeader from "../components/Dashboard/DashboardHeader";
import GoalsList from "../components/Dashboard/GoalsList"
import AddGoalButton from "../components/Dashboard/AddGoalButton";
import GoalForm from "../components/Dashboard/GoalForm";

import { goalPostUpdate } from "../utils/api";
import { storageDelete, storageSave } from "../utils/storage";




const Dashboard = ({ goals, addGoals, setGoals }) => {

    // const [goals, setGoals] = useState([]);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
    const [id, setId] = useState(0);
    const handleClose = () => setShow(false);

    const [loading, setLoading] = useState(false)

    const handleFormSubmit = (data) => {
        // updateContributions([data])
        if (data.Type === "Workout") {
            data.programsId = []
        } else if (data.Type === "Program") {
            data.workoutsId = []
        }

        // Add UserID & isCompleted to the form data
        data.profile = 6

        console.log(data);
        // console.log(data.programsId.map(item => item.value))

        // Save the form data and update the form submission status
        // Update the goals list state
        //Update storage
        //setFormData(data);

        handleClose()

        postGoal(data)
        console.log("DIT IS DE ID");
        console.log(id);

        addGoals([data])

        //EERST EEN POST MET ALLES BEHALVE WORKOUTS/EXERCISES
        // fetch("https://me-fit-nl.azurewebsites.net/goal", {
        //     method: "POST",
        //     body: JSON.stringify({
        //         "name": data.name,
        //         "type": data.type,
        //         "enddate": data.enddate,
        //         "profileId": 6
        //     }),
        //     headers: {
        //         "Content-type": "application/json; charset=UTF-8"
        //     }
        // })

        // console.log(data.name);
        // const goal = data

        // // DAN PROGRAMS UPDATEN
        // fetch(`https://me-fit-nl.azurewebsites.net/goal/name/${goal.name}`, {
        //     method: "GET",
        //     headers: {
        //         "Content-type": "application/json; charset=UTF-8",
        //     },
        // })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log(data.id);
        //         setId(data.id);
        //         console.log(id);
        //         console.log(goal.programsId);
        //     })
        //     .catch((error) => console.error(error));

        // //DAN WORKOUTS/PROGRAMS UPDATEN

        // const ids = goal.programsId.map(item => item.value)

        // //LOL CHEAT FIX door id + 1


        // fetch(`https://me-fit-nl.azurewebsites.net/goal/${id + 1}/programs`, {
        //     method: "PUT",
        //     headers: {
        //         "Content-type": "application/json; charset=UTF-8",
        //     },
        //     body: JSON.stringify(ids),
        // })
    }
    // .then(response => response.json())
    // .then(data => {
    //     console.log("Programs updated successfully");
    // })
    // .catch((error) => console.error(error));




    //Function passed down to remove a goal by setting the state
    function removeGoals(goal) {
        //misschien hier iets met state doen?
        setGoals(goals.filter(item => item.name != goal.name));

        //en storage
        storageDelete('goals')
        storageSave('goals', goals.filter(item => item.name != goal.name))
    }

    const postGoal = async (data) => {
        try {
            // EERST EEN POST MET ALLES BEHALVE WORKOUTS/EXERCISES
            const response = await fetch("https://me-fit-nl.azurewebsites.net/goal", {
                method: "POST",
                body: JSON.stringify({
                    name: data.name,
                    type: data.type,
                    enddate: data.enddate,
                    profileId: 6,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            });
            const goal = await response.json();
            console.log("Goal created successfully");


        } catch (error) {
            console.error(error);
        }

        return goalPostUpdate(data, setId)
    };

    return (

        <div className="App">
            <DashboardHeader />
            <GoalsList goals={goals} loading={loading} setLoading={setLoading} removeGoals={removeGoals} setGoals={setGoals} addGoals={addGoals} />
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