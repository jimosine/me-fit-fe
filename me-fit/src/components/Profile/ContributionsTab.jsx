import ContributionItem from "./ContributionItem";
import { Accordion } from "react-bootstrap";

const ContributionsTab = ({ contributions, setContributions }) => {

    const contributionsList = contributions.map((item, index) => <ContributionItem index={index} contributions={contributions} contribution={item} setContributions={setContributions} />)

    localStorage.setItem('contributions', contributions.length)

    return (
        <>
            <p>You have: {contributions.length} contributions</p>
            <div className="GoalList">
                <Accordion className="goals-accordion">{contributionsList}</Accordion>
            </div>
        </>
    )
}

export default ContributionsTab