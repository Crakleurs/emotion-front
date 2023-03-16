import {FC} from "react";
import {Link} from "react-router-dom";
import useCampaigns from "../hooks/useCampaigns";
import {IoEye} from "react-icons/io5";

const CampaignsPage: FC = () => {
    const {campaigns, isLoading} = useCampaigns();

    if (isLoading)
        return <></>


    return (
        <div className={"mx-auto w-9/12"}>
            <h1 className={"text-4xl text-center mt-24"}>Campaigns</h1>
            <div className={"flex justify-between mt-12"}>
                <div></div>

                <Link to={"/campaign/add"}>
                    <button className={"btn btn-primary"}>Add a campaign
                    </button>
                </Link>
            </div>

            <table className="table w-full mt-8">
                <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Hashtag</th>
                    <th>Creation date</th>
                    <th>Status</th>
                    <th>View</th>
                </tr>
                </thead>
                <tbody>
                {
                    campaigns.map((campaign) => {
                        return (
                            <tr>
                                <th>{campaign.id}</th>
                                <td>{campaign.name}</td>
                                <td>{campaign.hashtag}</td>
                                <td>{campaign.creationDate}</td>
                                <td>{campaign.status ? "Active" : "Inactive"}</td>
                                <td>
                                    <Link to={"/campaign/" + campaign.id}>
                                        <IoEye size="30" className={"hover:text-primary"}/>
                                    </Link>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

    export default CampaignsPage;
