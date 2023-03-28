import ProgramItem from "./ProgramItem";
import ExerciseItem from "./ExerciseItem";
import WorkoutItem from "./WorkoutItem";


import { storageSave, storageRead } from '../../utils/storage'

import { useState, useEffect } from "react";

const LibraryList = ({ selectedButton, contributions, show }) => {

    const [programs, setPrograms] = useState([]);

    const [exercises, setExercises] = useState([])

    const [workouts, setworkouts] = useState([])


    useEffect(() => {
        console.log("RENDERING");
        Promise.all([
            fetch('https://me-fit-nl.azurewebsites.net/program'),
            fetch('https://me-fit-nl.azurewebsites.net/exercise'),
            fetch('https://me-fit-nl.azurewebsites.net/workout'),

        ])
            .then(([resPrograms, resExercises, resWorkouts]) =>
                Promise.all([resPrograms.json(), resExercises.json(), resWorkouts.json()])
            )
            .then(([dataPrograms, dataExercises, dataWorkouts]) => {
                setPrograms(dataPrograms);
                setExercises(dataExercises);
                setworkouts(dataWorkouts)
                storageSave('programs', dataPrograms)
                storageSave('exercises', dataExercises)
                storageSave('workouts', dataWorkouts)
            });

    }, [contributions, selectedButton, show]);

    const programsList =
        programs.map(item => (
            <div className="list-item"><ProgramItem key={item.id} cardTitle={item.name} selectedButton={selectedButton} program={item} /></div>
        ))

    const exercisesList =
        exercises.map(item => (
            <div className="list-item"><ExerciseItem key={item.id} cardTitle={item.name} selectedButton={selectedButton} exercise={item} /></div>
        ))

    const workoutsList =
        workouts.map(item => (
            <div className="list-item"><WorkoutItem exercises={exercises} key={item.id} cardTitle={item.name} selectedButton={selectedButton} workout={item} /></div>
        ))

    return (
        <div>
            {selectedButton === "Programs" &&
                <div className="list-items">
                    {programsList}
                </div>
            }

            {selectedButton === "Workouts" &&
                <>
                    <div className="list-items">
                        {workoutsList}
                    </div>
                </>

            }

            {selectedButton === "Exercises" &&
                <div className="list-items">
                    {exercisesList}
                </div>

            }
        </div>
    )
}

// Export the component
export default LibraryList