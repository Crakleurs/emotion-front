import React, {FC, useState} from "react";
import EmotionalGraph from "../components/EmotionalGraph";
import {Navigate, useParams} from "react-router-dom";
import useCampaign from "../hooks/useCampaign";
import useEmotion from "../hooks/useEmotion";

const CampaignPage: FC = () => {
    const {id} = useParams();
    const {campaign, isLoading} = useCampaign(id ? +id : 0);
    const [maxMode, setMaxMode] = useState(false);
    const {emotion, isLoading: isEmotion, length} = useEmotion(id ? +id : 0, maxMode);

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

                <div>
                    <div className={"flex justify-between mb-6"}>
                        <span className={"font-bold text-2xl"}>Results</span>
                        <div className="form-control w-52">
                            <label className="cursor-pointer label">
                                <span className="label-text">Count only max</span>
                                <input type="checkbox" className="toggle toggle-primary"
                                       onChange={() => setMaxMode(!maxMode)}/>
                            </label>
                        </div>
                    </div>

                    <EmotionalGraph emotion={emotion} length={length}/>
                </div>
            </div>
        </div>
    )
}

export default CampaignPage
