import React, {FC} from "react";
import EmotionalGraph from "../components/EmotionalGraph";
import {Navigate, useNavigate, useParams} from "react-router-dom";
import useCampaign from "../hooks/useCampaign";

const CampaignPage: FC = () => {
    const {id} = useParams();
    const {campaign, isLoading} = useCampaign(id ? +id : 0);

    if (isLoading)
        return <></>

    if (!campaign)
        return <Navigate to="/" replace={true}/>

    return (

        <div className={"mx-auto w-9/12"}>
            <h1 className={"text-4xl text-center mt-24"}>Campaign: {campaign.name}</h1>

            <div className={"flex justify-between mt-24"}>
            <div className={"flex flex-col space-y-8"}>
                <div className={"flex"}>
                    <span className={"font-bold"}>ID :&nbsp;</span>
                    <span>{campaign.id}</span>
                </div>

                <div className={"flex"}>
                    <span className={"font-bold"}>NAME :&nbsp;</span>
                    <span>{campaign.name}</span>
                </div>

                <div className={"flex"}>
                    <span className={"font-bold"}>HASHTAG :&nbsp;</span>
                    <span>{campaign.hashtag}</span>
                </div>

                <div className={"flex"}>
                    <span className={"font-bold"}>CREATION DATE :&nbsp;</span>
                    <span>{campaign.creationDate}</span>
                </div>

                <div className={"flex"}>
                    <span className={"font-bold"}>STATUS :&nbsp;</span>
                    <span>{campaign.status ? "Active" : "Inactive"}</span>
                </div>
            </div>
            <EmotionalGraph/>
            </div>
        </div>
    )
}

export default CampaignPage
