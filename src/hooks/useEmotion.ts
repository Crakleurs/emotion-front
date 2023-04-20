import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {EmotionEntity} from "../types/emotion-types";
import {getLength, getMaxResults, getResults} from "../requests/emotion-requests";

const useEmotion = (campaignId: number, maxMode: boolean) => {
    const [emotion, setEmotion] = useState<EmotionEntity | null>(null);
    const [length, setLength] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        setIsLoading(true);

        if (!maxMode) {
            getResults(campaignId)
                .then((result) => {
                    setEmotion(result)
                })
                .catch((e) => {
                    toast.error("Impossible to retrieve the results")
                }).finally(
                () => {
                    setIsLoading(false);
                }
            )
        } else {
            getMaxResults(campaignId)
                .then((result) => {
                    setEmotion(result)
                })
                .catch((e) => {
                    toast.error("Impossible to retrieve the results")
                }).finally(
                () => {
                    setIsLoading(false);
                }
            )
        }

        getLength(campaignId)
            .then((result) => {
                setLength(result)
            })
            .catch((e) => {
                toast.error("Impossible to retrieve the length")
            })


    }, [maxMode])


    return {emotion, length, isLoading}

}

export default useEmotion;
