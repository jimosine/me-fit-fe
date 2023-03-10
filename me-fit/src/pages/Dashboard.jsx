import { useState } from "react";
import AddGoal from "../components/Dashboard/AddGoal"
import GoalsList from "../components/Dashboard/GoalsList"

const Dashboard = () => {

    const [goals, setGoals] = useState([]);


    //Function passed down to add a new goal by setting the state
    function addGoals(goal) {
        setGoals(goals.concat(goal));
        //setGoals(...goals, goal);
    }

    //Function passed down to remove a goal by setting the state
    function removeGoals(goal) {
        setGoals(goals.filter(function (item) {
            return item !== goal
        }))
    }


    return (

        <div className="App">
            <h1> Dashboard</h1>


            <GoalsList goals={goals} removeGoals={removeGoals} />
            <AddGoal goal={goals} updateGoals={addGoals} />

        </div>

    )

}

export default Dashboard