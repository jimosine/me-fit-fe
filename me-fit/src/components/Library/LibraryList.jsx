import LibraryItem from "./LibraryItem"

const LibraryList = ({ selectedButton }) => {
    return (
        <div>
            {selectedButton === "Programs" &&
                <>
                    <p>Program List</p>
                    <div className="list-items">
                        <div className="list-item">
                            <LibraryItem selectedButton={selectedButton} /></div>
                        <div className="list-item">
                            <LibraryItem selectedButton={selectedButton} /></div>

                    </div>
                </>
            }

            {selectedButton === "Workouts" &&
                <>
                    <p>Workout List</p>
                    <div className="list-items">
                        <div className="list-item"> <LibraryItem className="list-items" selectedButton={selectedButton} /> </div>
                        <div className="list-item"> <LibraryItem className="list-items" selectedButton={selectedButton} /> </div>
                    </div>
                </>

            }

            {selectedButton === "Exercises" &&
                <>
                    <p>Exercises List</p>
                    <LibraryItem selectedButton={selectedButton} />
                </>
            }
        </div>
    )
}

// Export the component
export default LibraryList