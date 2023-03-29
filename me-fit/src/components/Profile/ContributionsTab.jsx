import { storageRead } from "../../utils/storage"
import ContributionItem from "./ContributionItem";

const ContributionsTab = ({ contributions, setContributions }) => {

    const contributionsList = contributions.map((item, index) => <ContributionItem index={index} contributions={contributions} contribution={item} setContributions={setContributions} />)


    return (
        <>
            <p>You have: {contributions.length} contributions</p>
            <ul>
                {contributionsList}
            </ul>
        </>
    )
}

export default ContributionsTab