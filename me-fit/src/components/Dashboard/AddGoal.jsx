//KAN WEG

import { useState } from "react";
import GoalForm from "./GoalForm";
import { FaPlusCircle } from 'react-icons/fa';


const AddGoal = ({ goals, updateGoals }) => {
    // Define state variables using the useState hook
    const [showForm, setShowForm] = useState(false); // Controls whether to show the form or not
    const [formSubmitted, setFormSubmitted] = useState(false); // Tracks whether the form has been submitted
    const [formData, setFormData] = useState(null); // Stores the form data when submitted

    // Define a function to handle form submission
    const handleFormSubmit = (data) => {
        // Depending on the selected goal type, set either ProgramID or WorkoutID to an empty array
        if (data.Type === "Workout") {
            data.ProgramID = []
        } else if (data.Type === "Program") {
            data.WorkoutID = []
        }

        // Add UserID & isCompleted to the form data
        data.UserID = 1
        data.profileId = 1
        data.completed = false

        // Save the form data and update the form submission status
        // Update the goals list state
        setFormData(data);
        updateGoals([data])
        setFormSubmitted(true);
        setShowForm(false);
        console.log(data);
    };

    // Define a function to handle form cancellation
    const handleFormCancel = () => {
        // Hide the form
        setShowForm(false);
    };

    // Define a function to handle button click, to show the form
    const handleButtonClick = () => {
        // Show the form
        setShowForm(true);
    };


    // Return the JSX to render the component
    return (
        <div className="add-goal">
            {/* If the form and form submission status are not shown, render a button to add a new goal */}
            {!showForm && !formSubmitted && <button className="add-goal-button" onClick={handleButtonClick}><FaPlusCircle size={60} /></button>}
            {/* If the form is shown, render the GoalForm component */}
            {showForm && <GoalForm onSubmit={handleFormSubmit} onCancel={handleFormCancel} />}
            {/* If the form has been submitted, render a button to add another goal */}
            {formSubmitted && <button className="add-goal-button" onClick={() => { setShowForm(true); setFormSubmitted(false); }}><FaPlusCircle size={60} /></button>}
            {/* If the form has been submitted, display the data that the user entered on screen*/}
            {
                formSubmitted && (
                    <div style={{ color: "red", padding: "30px" }}>
                        <p>Form submitted with the following data:</p>
                        <pre>{JSON.stringify(formData, null, 2)}</pre>
                    </div>
                )
            }
        </div >
    );
};

export default AddGoal;