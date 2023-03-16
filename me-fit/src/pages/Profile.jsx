import ProfileHeader from "../components/Profile/ProfileHeader"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


const Profile = ({ contributions }) => {


    return (
        <>
            <div>
                <ProfileHeader />
            </div>
            <Tabs
                defaultActiveKey="info"
                id="justify-tab-example"
                className="mb-3"
                justify
            >
                <Tab eventKey="info" title="Info">
                    <p>yo</p>
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
            <div>
                {/* {console.log(contributions)} */}


            </div>

        </>
    )
}
export default Profile