import {useEffect, useState} from "react";
import {CampaignEntity} from "../types/campaing-types";
import {getCampaign} from "../requests/campaign-requests";
import {toast} from "react-toastify";

const useCampaign = (id: number) => {
    const [campaign, setCampaign] = useState<CampaignEntity | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        getCampaign(id)
            .then((result) => {
                setCampaign(result);
            })
            .catch((e) => {
                toast.error("Impossible to retrieve the campaign")
            }).finally(
            () => {
                setIsLoading(false);
            }
        )
    }, [])


    return {campaign, isLoading}

}

export default useCampaign;
