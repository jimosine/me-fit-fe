import LibraryItem from "./LibraryItem"

const LibraryList = ({ selectedButton }) => {
    return (
        <div>
            {selectedButton === "Programs" &&
                <>
                    <p>Program List</p>
                    <LibraryItem selectedButton={selectedButton} />
                </>
            }

            {selectedButton === "Workouts" &&
                <>
                    <p>Workout List</p>
                    <LibraryItem selectedButton={selectedButton} />
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