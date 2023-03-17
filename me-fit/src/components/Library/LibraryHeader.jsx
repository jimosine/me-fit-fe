// Import required modules and dependencies

import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const LibraryHeader = ({ selectedButton, handleButtonClick }) => {



    return (
        <header>
            <Container fluid>
                <Row >
                    <div className='dash-header'>
                        <h1> Library: {selectedButton}</h1>
                    </div>
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