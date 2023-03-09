const GoalItem = ({ goal, removeGoals }) => {

    //Update the state by filtering the goal array for the current goal item
    const handleButtonClick = () => {
        removeGoals(goal)
    }

    return (

        //If Type === Program, don't show the empty workout array, and vice versa.
        <>
            {goal.Type === "Program" &&
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
            }
        </>
    )

}

export default GoalItem