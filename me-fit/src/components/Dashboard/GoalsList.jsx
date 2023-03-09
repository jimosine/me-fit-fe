import GoalItem from "./GoalItem"


const GoalsList = ({ goals, removeGoals }) => {


    //Map over the goals array and create GoalItem components for each entry (goal)
    const goalsItems = goals.map((goal, index) => <GoalItem key={goal.Name + '-' + index} goal={goal} removeGoals={removeGoals} />)


    return (

        // Only render the goal list if there is a least one goal present
        <div className="GoalList">
            <p>My goals: </p>
            {goals.length === 0 && <p>Currently no goals.</p>}
            <hr />
            {goals.length !== 0 && <ul>{goalsItems}</ul>}

        </div>


    )

}

export default GoalsList