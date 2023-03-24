import { storageRead } from "../../utils/storage"
import ContributionItem from "./ContributionItem";

const ContributionsTab = ({ contributions, setContributions }) => {

    const contributionsList = contributions.map((item, index) => <ContributionItem index={index} contributions={contributions} contribution={item} setContributions={setContributions} />)

    // console.log(contributions);

    // if (contributions !== null) {
    //     console.log("hier");
    //     contributions = storageRead('contributions')
    //     console.log(contributions);
    // }

    return (
        <>
            <p>You have: {contributions.length} contributions</p>
            <ul>
                {contributionsList}
            </ul>
            {/* <p>{contributions.map(item => item.name)} </p> */}
            {/* <p>{contributions[0].Name} and {contributions[0].Type} and {contributions[0].workouts[0].label}</p> */}
        </>
    )
}

export default ContributionsTab