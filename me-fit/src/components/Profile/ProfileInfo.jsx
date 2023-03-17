import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Row } from 'react-bootstrap';

const ProfileInfo = ({ profile }) => {
    return (
        <Card style={{ width: '30rem' }}>
            <ListGroup variant="flush">
                <Row>
                    <ListGroup.Item>First Name: <span className='text-muted'>{profile.first_name}</span> </ListGroup.Item>
                    <ListGroup.Item>Last Name:  <span className='text-muted'>{profile.last_name}</span></ListGroup.Item>
                </Row>
            </ListGroup>
        </Card>



        // <Card style={{ width: '30rem' }}>
        //     <Card.Header>Profile Info</Card.Header>
        //     <ListGroup variant="flush">
        //         <ListGroup.Item>Info</ListGroup.Item>
        //         <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        //         <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        //     </ListGroup>
        // </Card>
    )
}

export default ProfileInfo
