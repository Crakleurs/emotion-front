import axios from "axios";
import {EmotionEntity} from "../types/emotion-types";

const getLength = async (campaignId: number) => {

    const {data} = await axios.get<{ length: number }>("/emotions/" + campaignId + "/length")
    return data.length;
}

const getResults = async (campaignId: number) => {

    const {data} = await axios.get<EmotionEntity>("/emotions/" + campaignId + "/results")
    return data;

}

const getMaxResults = async (campaignId: number) => {

    const {data} = await axios.get<EmotionEntity>("/emotions/" + campaignId + "/max-results")
    return data;

}

export {getResults, getMaxResults, getLength}
