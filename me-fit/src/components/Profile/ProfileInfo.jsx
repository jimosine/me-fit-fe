import { FaUserCircle } from 'react-icons/fa';
import achieves2complete from '../../images/profile.jpg';

const ProfileInfo = ({ profile }) => {

    if (profile.goalsId === undefined) {
        profile.goalsId = [];
    }

    if (localStorage.getItem('completed') !== null) {
        profile.completedGoals = JSON.parse(localStorage.getItem('completed'));
    } else if (profile.completedGoals === null) {
        profile.completedGoals = [];
    } else if (profile.completedGoals === undefined) {
        profile.completedGoals = [];
    } else if (profile.completedGoals.length <= 1) {
        profile.completedGoals = [];
    }

    let extraPoints = 0;
    if (JSON.parse(localStorage.getItem('contributions')) > 0) {
        extraPoints = 150;
    }

    return (
        <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
            <div className="card p-4 infostyle">
                <div className=" image d-flex flex-column justify-content-center align-items-center gap-3">
                    <div className="usercolor">
                        {profile.id === 4 ? <img
                            className="profilepicture"
                            src={achieves2complete}
                            alt="profile"
                        ></img> : <FaUserCircle size={100}></FaUserCircle>}

                    </div>
                    <span className="name mt-3">
                        {profile.firstname} {profile.lastname}
                    </span>
                    <span>Current amount of goals: {profile.goalsId.length}</span>
                    <span>Completed goals: {profile.completedGoals.length}</span>
                    <span>
                        Achievement points:
                        {profile.completedGoals.length * 150 + extraPoints}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
