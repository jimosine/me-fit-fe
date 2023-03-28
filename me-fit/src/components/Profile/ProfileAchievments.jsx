import achievement1 from '../../images/achievement1.png';
import achievement2 from '../../images/achievement2.png';
import achievement3 from '../../images/achievement3.png';
import achievement4 from '../../images/achievement4.png';
import achievement5 from '../../images/achievement5.png';
import achievement6 from '../../images/achievement6.png';

const ProfileAchievements = () => {
  return (
    <div className="achievements">
      <div>
        <p>The achievements you can complete</p>
      </div>
      <div className="achievements-list">
        <img
          className="achievement-img"
          src={achievement1}
          alt="achievement1"
        ></img>
        <img
          className="achievement-img"
          src={achievement2}
          alt="achievement1"
        ></img>
        <img
          className="achievement-img"
          src={achievement3}
          alt="achievement1"
        ></img>
        <img
          className="achievement-img"
          src={achievement4}
          alt="achievement1"
        ></img>
        <img
          className="achievement-img"
          src={achievement5}
          alt="achievement1"
        ></img>
        <img
          className="achievement-img"
          src={achievement6}
          alt="achievement1"
        ></img>
      </div>
    </div>
  );
};

export default ProfileAchievements;
