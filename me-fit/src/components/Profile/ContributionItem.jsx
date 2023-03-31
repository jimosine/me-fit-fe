import { Button } from "react-bootstrap"
import { useState, useEffect } from "react";
import { Accordion } from "react-bootstrap";

const ContributionItem = ({ contributions, contribution, setContributions, index }) => {


    const [id, setId] = useState(0);
    const name = contribution.name
    const type = contribution.Type

    if (type !== undefined) {
        console.log(type.toLowerCase());
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
                    <div className='goal-item'>

                        <Accordion.Item eventKey={`${index}`} style={{ border: "none" }}>
                            <Accordion.Header >Contribution #{index + 1}:  </Accordion.Header>
                            <Accordion.Body>

                                <div style={{
                                    width: "50%",
                                    marginLeft: "25%",
                                    backgroundColor: "rgba(211, 211, 211, 0.8)",
                                    padding: "10px",
                                    borderRadius: "15px",
                                    boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
                                }}>
                                    <img src={contributions[index].imglink} alt="" width="100%" height="200" />
                                    <p style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <span style={{ fontWeight: "bold" }}>Type:</span>
                                        <span>{type}</span>
                                    </p>
                                    <p style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <span style={{ fontWeight: "bold" }}>Name:</span>
                                        <span><input className="contribution-form-field-name" type="text" value={nameEdit} onChange={(e) => setNameEdit(e.target.value)} /></span>
                                    </p>
                                    <p style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <span style={{ fontWeight: "bold" }}>Description:</span>
                                        <div style={{ padding: "10px" }}>
                                            <textarea rows="3"
                                                className="contribution-form-field-description" type="text" value={descriptionEdit} onChange={(e) => setDescriptionEdit(e.target.value)} />
                                        </div>
                                    </p>
                                    <p style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <span style={{ fontWeight: "bold" }}>Muscle Group:</span>
                                        <input type="text" value={muscleGroupEdit} onChange={(e) => setMuscleGroupEdit(e.target.value)} />
                                    </p>
                                    <p style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <span style={{ fontWeight: "bold" }}>Reptitions:</span>
                                        <input type="number" value={repetitionsEdit} onChange={(e) => setRepititionsEdit(e.target.value)} />
                                    </p>
                                    <p style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <span style={{ fontWeight: "bold" }}>Video:</span>
                                        <input type="url" value={vidEdit} onChange={(e) => setVidEdit(e.target.value)} />
                                    </p>
                                    <p style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <span style={{ fontWeight: "bold" }}>Image:</span>
                                        <input type="url" value={imgEdit} onChange={(e) => setImgEdit(e.target.value)} />
                                    </p>

                                    <div className='contribution-form-buttons'>
                                        <Button variant="primary" onClick={updateContribution}>
                                            Save
                                        </Button>
                                    </div>

                                </div>


                            </Accordion.Body>
                        </Accordion.Item>
                    </div >
                </>)}



            {!isEditing &&

                <div className='goal-item'>

                    <Accordion.Item eventKey={`${index}`} style={{ border: "none" }}>
                        <Accordion.Header >Contribution #{index + 1}:  </Accordion.Header>
                        <Accordion.Body>

                            <div style={{
                                width: "50%",
                                marginLeft: "25%",
                                backgroundColor: "rgba(211, 211, 211, 0.8)",
                                padding: "10px",
                                borderRadius: "15px",
                                boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
                            }}>
                                <img src={contributions[index].imglink} alt="" width="100%" height="200" />
                                <p style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <span style={{ fontWeight: "bold" }}>Type:</span>
                                    <span>{type}</span>
                                </p>
                                <p style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <span style={{ fontWeight: "bold" }}>Name:</span>
                                    <span>{contributions[index].name}</span>
                                </p>
                                <p style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <span style={{ fontWeight: "bold" }}>Description:</span>
                                    <div style={{ padding: "10px" }}>
                                        <span>{contributions[index].description}</span>
                                    </div>
                                </p>
                                <p style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <span style={{ fontWeight: "bold" }}>Muscle Group:</span>
                                    <span>{contributions[index].musclegroup}</span>
                                </p>
                                <p style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <span style={{ fontWeight: "bold" }}>Reptitions:</span>
                                    <span>{contributions[index].repetitions}</span>
                                </p>
                                <p style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <span style={{ fontWeight: "bold" }}>Video:</span>
                                    <div style={{ padding: "5px" }}>
                                        <span>{contributions[index].vidlink}</span></div>
                                </p>

                                <div className='contribution-form-buttons'>
                                    <Button className='contribution-form-button' variant="danger" onClick={removeContribution} >
                                        Remove
                                    </Button>
                                    <Button variant="primary" onClick={handleButtonClick}>
                                        Edit
                                    </Button>
                                </div>

                            </div>


                        </Accordion.Body>
                    </Accordion.Item>
                </div >
            }
        </>
    )
}

export default ContributionItem