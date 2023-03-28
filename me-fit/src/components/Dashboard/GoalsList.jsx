import GoalItem from './GoalItem';
import Accordion from 'react-bootstrap/Accordion';
import { useEffect, useState } from 'react';
import { storageRead, storageSave } from '../../utils/storage';

const GoalsList = ({ goals, removeGoals, setGoals, loading, setLoading }) => {
    useEffect(() => {
        if (storageRead('goals') === null) {
            setLoading(true);
            const fetchData = async () => {
                Promise.all([
                    // fetch('https://jb-lost-in-translation-api-production.up.railway.app/trainers'
                    // await fetch('https://cors-anywhere.herokuapp.com/https://me-fit-nl.azurewebsites.net/goal'),
                    await fetch('https://me-fit-nl.azurewebsites.net/goal'),
                ])
                    .then(([response]) => Promise.all([response.json()]))
                    .then(async ([data]) => {
                        // setPrograms(dataPrograms)
                        // console.log(data);
                        // console.log(sessionStorage.getItem("id"))

                        storageSave('goals', data);
                        setGoals(data);
                        // addGoals(storageRead('goals'))
                        console.log('is nog leeg');
                        await setLoading(false);
                    });
            };

            fetchData();
        } else {
            setGoals(storageRead('goals'));
        }
    }, []);

    //Map over the goals array and create GoalItem components for each entry (goal)
    // const goalsItems = goals.filter(goal => goal.profile === 3).map((goal, index) => <GoalItem key={goal.Name + '-' + index} index={index} goal={goal} removeGoals={removeGoals} />)
    const goalsItems = goals.filter(goal => goal.profile === 3).map((goal, index) => (
        <GoalItem
            key={goal.Name + '-' + index}
            index={index}
            goal={goal}
            removeGoals={removeGoals}
        />
    ));

    return (
        // Only render the goal list if there is a least one goal present
        <div className="GoalList">
            {/* MISSCHIEN WEL ZO DOEN */}
            {/* {loading && <p> Loading goals.. </p>}
            {goals.length === 0 && <p>Currently no goals.</p>} */}
            {loading ? (
                <p> Loading goals.. </p>
            ) : (
                goals.length === 0 && <p>Currently no goals.</p>
            )}

            {goals.length !== 0 && (
                <Accordion className="goals-accordion">{goalsItems}</Accordion>
            )}
        </div>
    );
};

export default GoalsList;
