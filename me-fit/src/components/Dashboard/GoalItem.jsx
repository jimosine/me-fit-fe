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
                <Accordion.Header>{goal.Name} and {index}</Accordion.Header>
                <Accordion.Body>
                    {goal.Type === "Program" &&
                        <li>
                            {goal.Name} /
                            {goal.Type} /
                            {goal.Enddate} /
                            {goal.completed.toString()} /
                            {goal.workouts.map(item => item.label + " | ")} /
                            {/* <button onClick={handleButtonClick}>Remove</button> /
                        <button >More info</button> */}
                        </li>
                    }
                    {goal.Type === "Workout" &&
                        <li>
                            {goal.Name} /
                            {goal.Type} /
                            {goal.Enddate} /
                            {goal.completed.toString()} /
                            {goal.exercises.map(item => item.label + " | ")} /
                            {/* <button onClick={handleButtonClick}>Remove</button>
                            <button>More info</button> */}
                        </li>
                    }
                </Accordion.Body>
            </Accordion.Item>
            {/* {goal.Type === "Program" &&
                <li>
                    {goal.Name} /
                    {goal.Type} /
                    {goal.Enddate} /
                    {goal.completed.toString()} /
                    {goal.ProgramID} /
                    <button onClick={handleButtonClick}>Remove</button> /
                    <button >More info</button>
                </li>
            }

            {goal.Type === "Workout" &&
                <li>
                    {goal.Name} /
                    {goal.Type} /
                    {goal.Enddate} /
                    {goal.completed.toString()} /
                    {goal.WorkoutID} /
                    <button onClick={handleButtonClick}>Remove</button>
                    <button>More info</button>
                </li>
            } */}
        </div>
    )

}

export default GoalItem