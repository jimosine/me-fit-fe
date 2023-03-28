import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Row } from 'react-bootstrap';

const ProfileInfo = ({ profile }) => {


    if (profile.goalsId === undefined) {
        profile.goalsId = []
    }
    profile.completedGoals = []
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
                </Row>
            </ListGroup>
        </Card>




    )
}

export default ProfileInfo
