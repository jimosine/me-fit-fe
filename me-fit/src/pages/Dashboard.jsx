import { useState } from "react";
import { Modal } from 'react-bootstrap';

import DashboardHeader from "../components/Dashboard/DashboardHeader";
import GoalsList from "../components/Dashboard/GoalsList"
import AddGoalButton from "../components/Dashboard/AddGoalButton";
import GoalForm from "../components/Dashboard/GoalForm";

import { goalPostUpdate } from "../utils/api";
import { storageDelete, storageSave } from "../utils/storage";




const Dashboard = ({ goals, addGoals, setGoals, setProfile }) => {

    localStorage.setItem('contributions', JSON.stringify(0))


    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
    const [id, setId] = useState(0);
    const handleClose = () => setShow(false);

    const [loading, setLoading] = useState(false)

    const handleFormSubmit = (data) => {

        console.log(data);

        if (data.Type === "Workout") {
            data.programsId = []
        } else if (data.Type === "Program") {
            data.workoutsId = []

            data.programsId = data.programsId.map(item => item.value)

        }
        data.type = data.type.value
        data.programsId = data.programsId.map(item => item.value)
        data.profile = parseInt(sessionStorage.getItem("profile"))

        handleClose()
        postGoal(data)
        addGoals([data])
    }


    //Function passed down to remove a goal by setting the state
    function removeGoals(goal) {
        //state
        setGoals(goals.filter(item => item.name !== goal.name));

        //en storage
        storageDelete('goals')
        storageSave('goals', goals.filter(item => item.name !== goal.name))
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
                    //VERANDEREN NAAR PROFILE ID UIT DE STORAGE HALEN
                    profileId: parseInt(sessionStorage.getItem("profile")),
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
            <GoalsList setProfile={setProfile} goals={goals} loading={loading} setLoading={setLoading} removeGoals={removeGoals} setGoals={setGoals} addGoals={addGoals} />
            <AddGoalButton goal={goals} handleShow={handleShow} updateGoals={addGoals} />

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