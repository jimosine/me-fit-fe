import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Row } from 'react-bootstrap';

const ProfileInfo = ({ profile }) => {

    console.log("IN PROFILE");
    console.log(profile);

    if (profile.goalsId === undefined) {
        profile.goalsId = []
    }

    if (localStorage.getItem('completed') !== null) {
        profile.completedGoals = JSON.parse(localStorage.getItem('completed'))
        console.log(profile.completedGoals);
    }
    else if (profile.completedGoals === null) {
        profile.completedGoals = []
    }
    else if (profile.completedGoals === undefined) {
        profile.completedGoals = []
    }
    else if (profile.completedGoals.length <= 1) {
        profile.completedGoals = []
    }



    // if (profile.completedGoals === undefined) {
    //     profile.completedGoals = []
    // }

    return (
        <Card style={{ width: '30rem' }}>
            <ListGroup variant="flush">
                <Row>
                    <ListGroup.Item>First Name: <span className='text-muted'>{profile.firstname}</span> </ListGroup.Item>
                    <ListGroup.Item>Last Name:  <span className='text-muted'>{profile.lastname}</span></ListGroup.Item>
                    <ListGroup.Item>Current amount of goals:  <span className='text-muted'>{profile.goalsId.length}</span></ListGroup.Item>
                    <ListGroup.Item>Completed goals:  <span className='text-muted'>{profile.completedGoals.length}</span></ListGroup.Item>
                    <ListGroup.Item>Achievement points:  <span className='text-muted'>{profile.completedGoals.length * 150}</span></ListGroup.Item>
                </Row>
            </ListGroup>
        </Card>




    )
}

export default ProfileInfo
