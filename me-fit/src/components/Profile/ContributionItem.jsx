import { Button } from "react-bootstrap"
import { useState, useEffect } from "react";

const ContributionItem = ({ contributions, contribution, setContributions, index }) => {

    const [id, setId] = useState(0);
    const name = contribution.name
    const type = contribution.Type.value.toLowerCase()

    const [nameEdit, setNameEdit] = useState(contribution.name);
    const [descriptionEdit, setDescriptionEdit] = useState(contribution.description);
    const [muscleGroupEdit, setMuscleGroupEdit] = useState(contribution.musclegroup);

    const [isEditing, setIsEditing] = useState(false);

    const handleEditButtonClick = () => {
        setIsEditing(true);
    };

    const updateContribution = () => {
        const updatedContribution = {
            "id": id,
            name: nameEdit,
            description: descriptionEdit,
            musclegroup: muscleGroupEdit,
            "vidlink": "vidlink",
            "imglink": "imglink",
            "repetitions": 10
        };

        console.log(updatedContribution);

        fetch(`https://me-fit-nl.azurewebsites.net/${type}/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(updatedContribution),
            // body: JSON.stringify({
            //     "id": 12,
            //     "name": "Testing",
            //     "description": "description",
            //     "musclegroup": "musclegroup",
            //     "vidlink": "vidlink",
            //     "imglink": "imglink",
            //     "repetitions": 10
            // }),
        })
            .then((response) => console.log(response))
            .catch((error) => console.error(error));

        setIsEditing(false)

        //UPDATE STATE
        contributions[index] = updatedContribution
        console.log(contributions);
        setContributions(contributions)
    };

    const removeContribution = () => {
        //UPDATE SERVER
        fetch(`https://me-fit-nl.azurewebsites.net/${type}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => console.log(response))

        //UPDATE STATE
        const contributions2 = contributions.filter(item => item.name !== name)
        setContributions(contributions2)
    }

    const handleButtonClick = () => {
        console.log("lol")
        setIsEditing(true)


    }

    //GET ID OF THE CONTRIBUTION
    useEffect(() => {
        fetch(`https://me-fit-nl.azurewebsites.net/${type}/name/${name}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => response.json())
            .then((data) => setId(data.id))
            .catch((error) => console.error(error));
    }, []);

    // console.log(id)

    return (

        <>

            {isEditing && (
                <>
                    <input type="text" value={nameEdit} onChange={(e) => setNameEdit(e.target.value)} />
                    <input type="text" value={descriptionEdit} onChange={(e) => setDescriptionEdit(e.target.value)} />
                    <input type="text" value={muscleGroupEdit} onChange={(e) => setMuscleGroupEdit(e.target.value)} />
                    <div className='contribution-form-buttons'>
                        <Button variant="primary" onClick={updateContribution}>
                            Edit goal
                        </Button>
                    </div>
                </>)}

            {!isEditing &&
                <>
                    <li key="name">{contributions[index].name}</li>
                    <li key="description">{contributions[index].description}</li>
                    <li key="musclegroup">{contributions[index].musclegroup}</li>
                    <li key="id">{id}</li>
                    <div className='contribution-form-buttons'>
                        <Button className='contribution-form-button' variant="danger" onClick={removeContribution} >
                            Remove
                        </Button>
                        <Button variant="primary" onClick={handleButtonClick}>
                            Edit goal
                        </Button>
                    </div>
                    <hr />
                </>
            }

        </>
    )
}

export default ContributionItem