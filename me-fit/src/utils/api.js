export const goalPostUpdate = async (goal, setId, id) => {


    try {
        const response = await fetch(`https://me-fit-nl.azurewebsites.net/goal/name/${goal.name}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        const data = await response.json();
        setId(data.id);


        if (goal.type === 'Program') {
            const ids = goal.programsId
            await fetch(`https://me-fit-nl.azurewebsites.net/goal/${data.id}/programs`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
                body: JSON.stringify(ids),
            });
        }

        else if (goal.type === 'Workout') {
            const ids = goal.workoutsId.map(item => item.value);
            await fetch(`https://me-fit-nl.azurewebsites.net/goal/${data.id}/workouts`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
                body: JSON.stringify(ids),
            });
        }

    } catch (error) {
        console.error(error);
    }

    return id
};

export const deleteGoal = async (goal, setId) => {

    try {
        const response = await fetch(`https://me-fit-nl.azurewebsites.net/goal/name/${goal.name}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        const data = await response.json();
        setId(data.id);

        const ids = goal.programsId.map(item => item.value);
        await fetch(`https://me-fit-nl.azurewebsites.net/goal/${data.id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(ids),
        });
    }
    catch (error) {
        console.error(error);
    }
};

export const workoutsFromPrograms = async (programIds) => {

    if (programIds.length < 1) {
        return false
    }

    const ids = programIds

    const workoutIds = [];

    const fetchPromises = ids.map(async idx => {
        const response = await fetch(`https://me-fit-nl.azurewebsites.net/program/${idx}/workouts`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        return await response.json();
    });

    const responses = await Promise.all(fetchPromises);

    for (const response of responses) {
        const ids = response.map(workout => workout.id);
        workoutIds.push(...ids);
    }

    return workoutIds;
};

export const exercisesFromWorkouts = async (workoutIds) => {

    if (workoutIds.length < 1) {
        return false
    }
    const ids = workoutIds
    const exerciseIds = [];

    const fetchPromises = ids.map(idx => {
        return fetch(`https://me-fit-nl.azurewebsites.net/workout/${idx}/exercises`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        }).then(response => response.json());
    });

    const responses = await Promise.all(fetchPromises);

    for (const response of responses) {
        const ids = response.map(exercise => exercise.id);
        exerciseIds.push(...ids);
    }

    return exerciseIds;
};

export const storeProfileSession = async () => {
    const userId = sessionStorage.getItem('id');

    fetch(`https://me-fit-nl.azurewebsites.net/profile/userid/${userId}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            sessionStorage.setItem('profile', data.id);
        })
        .catch((error) => console.error(error));

}