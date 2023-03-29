import ProfileHeader from "../components/Profile/ProfileHeader"
import ProfileForm from "../components/Profile/ProfileForm";
import ContributionsTab from "../components/Profile/ContributionsTab";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ProfileInfo from "../components/Profile/ProfileInfo";
import AddGoalButton from "../components/Dashboard/AddGoalButton";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import ProfileAchievements from "../components/Profile/ProfileAchievments";
import { storageRead, storageSave } from "../utils/storage";
import { isContributorRole } from "../utils/user"

const Profile = ({ contributions, profile, setProfile, setContributions }) => {
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);



    const handleFormSubmit = (data) => {
        console.log(data);
        setProfile(data)
        storageSave('profile', data)
        // // Add UserID & isCompleted to the form data
        // data.UserID = 1
        // data.completed = false

        handleClose()

    };

    useEffect(() => {
        const userId = sessionStorage.getItem('id');

        fetch(`https://me-fit-nl.azurewebsites.net/profile/userid/${userId}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem('profileinfo', JSON.stringify(data))
                setProfile(storageRead('profileinfo'))
            })
            .catch((error) => console.error(error));





    }, []);


    return (
        <>
            <div>
                <ProfileHeader />
            </div>

            {/* if profile not set, first set */}
            {storageRead('profileinfo') === null &&
                <>
                    <p>Please fill in your profile page first.</p>

                    <ProfileForm onSubmit={handleFormSubmit} setProfile={setProfile} onCancel={handleClose} />
                </>
            }


            {storageRead('profileinfo') !== null &&
                <Tabs
                    defaultActiveKey="info"
                    id="justify-tab-example"
                    className="mb-3"
                    justify
                >

                    <Tab eventKey="info" title="Info">
                        <ProfileInfo profile={profile} />
                        <AddGoalButton handleShow={handleShow} />
                        <Modal show={show} onHide={handleClose} centered>
                            <Modal.Header closeButton>
                                <Modal.Title className="ms-auto">Change your profile</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <ProfileForm onSubmit={handleFormSubmit} setProfile={setProfile} onCancel={handleClose} />
                            </Modal.Body>
                        </Modal>
                    </Tab>


                    {isContributorRole() && <Tab eventKey="contributions" title="Contributions">
                        {contributions.length === 0 &&
                            <>
                                <p>No contributions yet</p>
                            </>
                        }

                        {contributions.length > 0 &&
                            <ContributionsTab contributions={contributions} setContributions={setContributions} />
                        }
                    </Tab>}

                    {!isContributorRole() && <Tab eventKey="contributions" title="Contributions">
                        Please email admin@me-fit.nl for a Contribution role
                    </Tab>}


                    <Tab eventKey="achievements" title="Achievements">
                        <ProfileAchievements />
                    </Tab>

                </Tabs>
            }
            <div>
                {/* {console.log(contributions)} */}


            </div>

        </>
    )
}
export default Profile
