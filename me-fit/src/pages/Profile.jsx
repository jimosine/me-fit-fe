const Profile = ({ contributions }) => {


    return (
        <>
            <div>
                Profile
            </div>
            <div>
                {/* {console.log(contributions)} */}

                {contributions.length === 0 &&
                    <p>No contributions yet</p>
                }

                {contributions.length > 0 &&
                    <>
                        <p>You have: {contributions.length} contributions</p>
                        <p>{contributions[0].Name} and {contributions[0].Type} and {contributions[0].workouts[0].label}</p>
                    </>
                }
            </div>

        </>
    )
}
export default Profile