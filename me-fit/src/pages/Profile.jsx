import ProfileHeader from "../components/Profile/ProfileHeader"
import ProfileForm from "../components/Profile/ProfileForm";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ProfileInfo from "../components/Profile/ProfileInfo";
import AddGoalButton from "../components/Dashboard/AddGoalButton";
import { useState } from "react";
import { Modal } from "react-bootstrap";

const Profile = ({ contributions, profile, setProfile }) => {
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);



    const handleFormSubmit = (data) => {
        console.log(data);
        setProfile(data)
        // // Add UserID & isCompleted to the form data
        // data.UserID = 1
        // data.completed = false

        handleClose()

    };

    return (
        <>
            <div>
                <ProfileHeader />
            </div>

            {/* if profile not set, first set */}
            {!profile.first_name &&
                <>
                    <p>Please fill in your profile page first.</p>

                    <ProfileForm onSubmit={handleFormSubmit} setProfile={setProfile} onCancel={handleClose} />
                </>
            }


            {profile.first_name &&
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


                    <Tab eventKey="contributions" title="Contributions">
                        {contributions.length === 0 &&
                            <p>No contributions yet</p>
                        }

                        {contributions.length > 0 &&
                            <>
                                <p>You have: {contributions.length} contributions</p>
                                <p>{contributions[0].Name} and {contributions[0].Type} and {contributions[0].workouts[0].label}</p>
                            </>
                        }
                    </Tab>


                    <Tab eventKey="achievements" title="Achievements">
                        <p>yo</p>
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