import { useState } from "react";
import GoalForm from "./GoalForm";


const AddGoal = () => {
    const [showForm, setShowForm] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState(null);

    const handleFormSubmit = (data) => {

        //Zodat ze niet beide kunnen zetten
        if (data.Type === "Workout") {
            data.ProgramID = []
        } else if (data.Type === "Program") {
            data.WorkoutID = []
        }

        //Temp voor user ID
        data.UserID = 1

        setFormData(data);
        setFormSubmitted(true);
        setShowForm(false);
    };

    const handleFormCancel = () => {
        setShowForm(false);
    };

    const handleButtonClick = () => {
        setShowForm(true);
    };

    return (
        <div>
            {!showForm && !formSubmitted && <button onClick={handleButtonClick}>Add a new goal</button>}
            {showForm && <GoalForm onSubmit={handleFormSubmit} onCancel={handleFormCancel} />}
            {formSubmitted && <button onClick={() => { setShowForm(false); setFormSubmitted(false); }}>Add a new goal</button>}
            {formSubmitted && (
                <div>
                    <p>Form submitted with the following data:</p>
                    <pre>{JSON.stringify(formData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default AddGoal;