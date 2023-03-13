// Import required modules and dependencies

import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const LibraryHeader = ({ selectedButton, handleButtonClick }) => {
    // Define state for the selected button




    return (
        <header>
            <Container className="library-header" fluid>
                <Row className="library-header-description">
                    <Col>{selectedButton}</Col>
                </Row>
            </Container>
            <Container className="library-options">
                <Row>
                    <ButtonGroup aria-label="Basic example">
                        <Button
                            variant="secondary"
                            onClick={() => handleButtonClick('Programs')}
                            active={selectedButton === 'Programs'}
                        >
                            Programs
                        </Button>
                        <Button
                            variant="secondary"
                            onClick={() => handleButtonClick('Workouts')}
                            active={selectedButton === 'Workouts'}
                        >
                            Workouts
                        </Button>
                        <Button
                            variant="secondary"
                            onClick={() => handleButtonClick('Exercises')}
                            active={selectedButton === 'Exercises'}
                        >
                            Exercises
                        </Button>
                    </ButtonGroup>
                </Row>
            </Container>
        </header>
    );
};

// Export the component
export default LibraryHeader;