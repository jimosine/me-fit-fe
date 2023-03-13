import LibraryHeader from "../components/Library/LibraryHeader"
import LibraryList from "../components/Library/LibraryList";
import { Row, Col } from 'react-bootstrap';


import { useState } from "react";


const Library = () => {

    const [selectedButton, setSelectedButton] = useState('Exercises');
    // Define a function to handle button clicks
    const handleButtonClick = (button) => {
        setSelectedButton(button);
    };

    return (
        <div>
            <Row >
                <Col>Search stuff</Col>
                <Col xs={7}><LibraryHeader selectedButton={selectedButton} handleButtonClick={handleButtonClick} /></Col>
                <Col></Col>
            </Row>
            <Row>
                <Col>Filter stuff</Col>
                <Col xs={7}><LibraryList selectedButton={selectedButton} /></Col>
                <Col></Col>
            </Row>

        </div>
    )
}
export default Library