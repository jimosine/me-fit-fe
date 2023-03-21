import Accordion from 'react-bootstrap/Accordion';

const GoalItem = ({ goal, removeGoals, index }) => {

    //Update the state by filtering the goal array for the current goal item
    // const handleButtonClick = () => {
    //     removeGoals(goal)
    // }

    return (


        //If Type === Program, don't show the empty workout array, and vice versa.
        <div className='goal-item'>
            <Accordion.Item eventKey={`${index}`}>
                <Accordion.Header>{goal.name} and {index}</Accordion.Header>
                <Accordion.Body>
                    {goal.type === "Program" &&
                        <li>
                            {goal.name} /
                            {goal.type} /
                            {goal.enddate} /
                            {goal.completed.toString()} /
                            {goal.programs.map(item => item.label + " | ")} /
                            {/* <button onClick={handleButtonClick}>Remove</button> /
                        <button >More info</button> */}
                        </li>
                    }
                    {goal.type === "Workout" &&
                        <li>
                            {goal.name} /
                            {goal.type} /
                            {goal.enddate} /
                            {goal.completed.toString()} /
                            {goal.workouts.map(item => item.label + " | ")} /
                            {/* <button onClick={handleButtonClick}>Remove</button>
                            <button>More info</button> */}
                        </li>
                    }
                    {goal.type === "Legs" &&
                        <li>
                            {goal.name} /
                            {goal.type} /
                            {goal.enddate} /
                            {/* {goal.completed.toString()} / */}
                            {/* {goal.exercises.map(item => item.label + " | ")} / */}
                            {/* <button onClick={handleButtonClick}>Remove</button>
                            <button>More info</button> */}
                        </li>
                    }
                </Accordion.Body>
            </Accordion.Item>
        </div>
    )

}

export default GoalItem