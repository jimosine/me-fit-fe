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
        // console.log(goal.programsId);

        if (goal.type === 'Program') {
            const ids = goal.programsId.map(item => item.value);
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
        // console.log(goal.programsId);

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

export const workoutsFromPrograms = async (id, programIds) => {
    console.log(id)
    return programIds
    // try {
    //     const response = await fetch(`https://me-fit-nl.azurewebsites.net/goal/name/${goal.name}`, {
    //         method: "GET",
    //         headers: {
    //             "Content-type": "application/json; charset=UTF-8",
    //         },
    //     });
    //     const data = await response.json();
    //     setId(data.id);
    //     // console.log(goal.programsId);

    //     const ids = goal.programsId.map(item => item.value);
    //     await fetch(`https://me-fit-nl.azurewebsites.net/goal/${data.id}`, {
    //         method: "DELETE",
    //         headers: {
    //             "Content-type": "application/json; charset=UTF-8",
    //         },
    //         body: JSON.stringify(ids),
    //     });
    // }
    // catch (error) {
    //     console.error(error);
    // }

}