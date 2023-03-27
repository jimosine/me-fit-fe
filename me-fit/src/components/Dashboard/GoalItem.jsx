import Accordion from 'react-bootstrap/Accordion';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { storageDelete, storageRead, storageSave } from '../../utils/storage';
import { deleteGoal, exercisesFromWorkouts, goalPostUpdate, workoutsFromPrograms } from '../../utils/api';


const GoalItem = ({ goal, removeGoals, index }) => {

    const [id, setId] = useState(0);
    const [workouts, setWorkouts] = useState([])
    const [exercises, setExercises] = useState([])

    //PROGRESS PROCENT
    const [checkedCount, setCheckedCount] = useState(0);

    const handleRemove = () => {
        //haalt uit state & storage
        removeGoals(goal)

        //haalt uit de api
        deleteGoal(goal, setId)
    }

    const handleButtonClick = () => {

        console.log(exercises);
        console.log(workouts);

        // workoutsFromPrograms(goal.programsId).then(ids => {
        //     setWorkouts(ids)
        //     exercisesFromWorkouts(ids).then(i => {
        //         setExercises(i)

        //     })
        // });

        // const exerciseObjects = storageRead('exercises').filter(item => exercises.includes(item.id))
        // setExercises(exerciseObjects)

        // const workoutObjects = storageRead('workouts').filter(item => workouts.includes(item.id))
        // setExercises(workoutObjects)
        // console.log(workoutObjects)
    };




    const handleCheckboxChange = (event) => {
        if (event.target.checked) {
            setCheckedCount(checkedCount + 1);
        } else {
            setCheckedCount(checkedCount - 1);
        }
    }

    let progress = 0
    if (goal.type === "Program") {
        // progress = 33
        progress = (checkedCount / exercises.length) * 100;
    } else {
        progress = 100
    }

    // console.log(goal.programsId);


    useEffect(() => {
        const fetchData = async () => {
            const ids = await workoutsFromPrograms(goal.programsId);
            setWorkouts(ids);

            const exerciseIds = await exercisesFromWorkouts(ids);
            setExercises(exerciseIds);

            const exerciseObjects = storageRead('exercises').filter(item => exerciseIds.includes(item.id));
            setExercises(exerciseObjects);

            const workoutObjects = storageRead('workouts').filter(item => ids.includes(item.id));
            setWorkouts(workoutObjects);

            console.log(workouts);
            console.log(exercises);
            console.log(exerciseObjects);
            console.log(workoutObjects);
        };

        fetchData();
    }, []);



    if (workouts.length === 0 || exercises.length === 0) {
        return <div>Loading...</div>;
    }

    return (



        //If Type === Program, don't show the empty workout array, and vice versa.
        <div className='goal-item'>

            <Accordion.Item eventKey={`${index}`} style={{ border: "none" }}>
                <Accordion.Header >{goal.name} and {index}</Accordion.Header>
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
                                <span style={{ fontWeight: "bold" }}>Programs:</span>
                            </p>

                            <ul style={{ listStyle: "none", paddingLeft: "0" }}>
                                {goal.programsId.map(item => (
                                    <li style={{ display: "flex", alignItems: "center" }}>
                                        <span style={{ marginLeft: "1.5rem", marginRight: "1rem", fontWeight: "bold" }}>{item.label}</span>
                                        <Form.Check onChange={handleCheckboxChange} style={{ marginLeft: "0.5rem" }} />
                                    </li>
                                ))}
                            </ul>

                            <p style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <span style={{ fontWeight: "bold" }}>Workouts:</span>
                            </p>

                            <ul style={{ listStyle: "none", paddingLeft: "0" }}>
                                {workouts.map(item => (
                                    <li style={{ display: "flex", alignItems: "center" }}>
                                        <span style={{ marginLeft: "1.5rem", marginRight: "1rem", fontWeight: "bold" }}>{item.name}</span>
                                        <Form.Check onChange={handleCheckboxChange} style={{ marginLeft: "0.5rem" }} />
                                    </li>
                                ))}
                            </ul>

                            <p style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <span style={{ fontWeight: "bold" }}>Exercises:</span>
                            </p>

                            <ul style={{ listStyle: "none", paddingLeft: "0" }}>
                                {exercises.map(item => (
                                    <li style={{ display: "flex", alignItems: "center" }}>
                                        <span style={{ marginLeft: "1.5rem", marginRight: "1rem", fontWeight: "bold" }}>{item.name}</span><span>: {item.repetitions} reps</span>
                                        <Form.Check onChange={handleCheckboxChange} style={{ marginLeft: "0.5rem" }} />
                                    </li>
                                ))}
                            </ul>

                            <p style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <span style={{ fontWeight: "bold" }}>Progress:</span>
                            </p>
                            <span><ProgressBar now={progress} label={`${progress}%`} /></span>
                            <div className='contribution-form-buttons'>
                                <Button
                                    className="buttonEdit"
                                    variant="primary"
                                    onClick={handleButtonClick}
                                >
                                    Edit goal
                                </Button>
                                <Button
                                    className="buttonRemove"
                                    variant="danger"
                                    onClick={handleRemove}
                                >
                                    Remove   </Button>
                            </div>
                        </div>
                    }

                    {goal.type === "Workout" &&
                        <li>
                            {goal.name} /
                            {goal.type} /
                            {goal.enddate} /
                            {/* {goal.completed.toString()} /
                            {goal.workouts.map(item => item.label + " | ")} / */}
                        </li>
                    }

                </Accordion.Body>
            </Accordion.Item>
        </div >
    )

}

export default GoalItem