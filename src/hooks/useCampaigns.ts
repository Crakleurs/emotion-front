import {useEffect, useState} from "react";
import {CampaignEntity} from "../types/campaign-types";
import {getCampaigns} from "../requests/campaign-requests";
import {toast} from "react-toastify";

const useCampaigns = () => {
    const [campaigns, setCampaigns] = useState<CampaignEntity[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        getCampaigns()
            .then((result) => {
                setCampaigns(result);
            })
            .catch((e) => {
                toast.error("Impossible to retrieve campaigns")
            }).finally(() => {
            setIsLoading(false);
        })
    }, [])


    return {campaigns, isLoading}

}

export default useCampaigns;
