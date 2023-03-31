import GoalItem from './GoalItem';
import Accordion from 'react-bootstrap/Accordion';
import { useEffect } from 'react';
import { storageRead, storageSave } from '../../utils/storage';
import { storeProfileSession } from '../../utils/api';

const GoalsList = ({ goals, removeGoals, setGoals, loading, setLoading, setProfile }) => {
    useEffect(() => {
        storeProfileSession()
        if (storageRead('goals') === null) {
            setLoading(true);
            const fetchData = async () => {
                Promise.all([
                    await fetch('https://me-fit-nl.azurewebsites.net/goal'),
                ])
                    .then(([response]) => Promise.all([response.json()]))
                    .then(async ([data]) => {
                        storageSave('goals', data);
                        setGoals(data);
                        await setLoading(false);
                    });
            };

            fetchData();
        } else {
            setGoals(storageRead('goals'));
        }
    }, []);

    //Map over the goals array and create GoalItem components for each entry (goal)
    const profileId = parseInt(sessionStorage.getItem("profile"))
    const goalsItems = goals.filter(goal => goal.profile === profileId).map((goal, index) => (
        <GoalItem
            setProfile={setProfile}
            key={goal.name + '-' + index}
            index={index}
            goal={goal}
            removeGoals={removeGoals}
        />
    ));

    return (
        // Only render the goal list if there is a least one goal present
        <div className="GoalList">
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
