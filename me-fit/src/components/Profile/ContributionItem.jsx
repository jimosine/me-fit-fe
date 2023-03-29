import { Button } from "react-bootstrap"
import { useState, useEffect } from "react";

const ContributionItem = ({ contributions, contribution, setContributions, index }) => {


    const [id, setId] = useState(0);
    const name = contribution.name
    const type = contribution.Type

    //SOMS IS IE UNDEFINED
    if (type !== undefined) {
        console.log(type.toLowerCase());
        // const type = contribution.Type.value.toLowerCase()
    }

    const [nameEdit, setNameEdit] = useState(contribution.name);
    const [descriptionEdit, setDescriptionEdit] = useState(contribution.description);
    const [muscleGroupEdit, setMuscleGroupEdit] = useState(contribution.musclegroup);
    const [imgEdit, setImgEdit] = useState(contribution.imglink);
    const [vidEdit, setVidEdit] = useState(contribution.vidlink);
    const [repetitionsEdit, setRepititionsEdit] = useState(contribution.repetitions);

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
            "vidlink": vidEdit,
            "imglink": imgEdit,
            "repetitions": repetitionsEdit
        };


        // fetch(`https://me-fit-nl.azurewebsites.net/${type}/${id}`, {
        fetch(`https://me-fit-nl.azurewebsites.net/exercise/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(updatedContribution),
        })
            .then((response) => console.log(response))
            .catch((error) => console.error(error));

        setIsEditing(false)

        //UPDATE STATE
        updatedContribution.Type = type
        contributions[index] = updatedContribution
        setContributions(contributions)
        localStorage.setItem('contributions', JSON.stringify(1))
    };

    const removeContribution = () => {
        //UPDATE SERVER
        fetch(`https://me-fit-nl.azurewebsites.net/exercise/${id}`, {
            // fetch(`https://me-fit-nl.azurewebsites.net/${type}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => console.log(response))

        //UPDATE STATE
        contributions = contributions.filter(item => item.name !== name);
        setContributions(contributions)
    }

    const handleButtonClick = () => {
        console.log("editing")
        setIsEditing(true)


    }

    //GET ID OF THE CONTRIBUTION
    useEffect(() => {
        fetch(`https://me-fit-nl.azurewebsites.net/exercise/name/${name}`, {
            // fetch(`https://me-fit-nl.azurewebsites.net/${type}/name/${name}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => response.json())
            .then((data) => setId(data.id))
            .catch((error) => console.error(error));
    }, []);


    return (

        <>

            {isEditing && (
                <>
                    <input type="text" value={nameEdit} onChange={(e) => setNameEdit(e.target.value)} />
                    <input type="text" value={descriptionEdit} onChange={(e) => setDescriptionEdit(e.target.value)} />
                    <input type="text" value={muscleGroupEdit} onChange={(e) => setMuscleGroupEdit(e.target.value)} />
                    <input type="text" value={imgEdit} onChange={(e) => setImgEdit(e.target.value)} />
                    <input type="text" value={vidEdit} onChange={(e) => setVidEdit(e.target.value)} />
                    {/* <input type="text" value={repetitionsEdit} onChange={(e) => setRepititionsEdit(e.target.value)} /> */}
                    <div className='contribution-form-buttons'>
                        <Button variant="primary" onClick={updateContribution}>
                            Edit goal
                        </Button>
                    </div>
                </>)}

            {!isEditing &&
                <>
                    <li key="type">{type}</li>
                    <li key="name">{contributions[index].name}</li>
                    <li key="description">{contributions[index].description}</li>
                    <li key="musclegroup">{contributions[index].musclegroup}</li>
                    <li key="reptitions">{contributions[index].repetitions}</li>
                    <li key="img">{contributions[index].imglink}</li>
                    <li key="vid">{contributions[index].vidlink}</li>
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