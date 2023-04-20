import axios from "axios";
import {CampaignEntity, CampaignInput} from "../types/campaign-types";

const getCampaigns = async () => {

    const {data} = await axios.get<CampaignEntity[]>("/campaigns")
    return data;
}

const getCampaign = async (id: number) => {

    const {data} = await axios.get<CampaignEntity>("/campaigns/" + id)
    return data;

}

const createCampaign = async (campaign: CampaignInput) => {

    const {data} = await axios.post<CampaignEntity>("/campaigns", campaign)
    return data;

}

export {getCampaigns, getCampaign, createCampaign}
