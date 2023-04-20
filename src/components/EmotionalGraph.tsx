import EmotionalBar from "./EmotionalBar";
import React from "react";
import {EmotionEntity} from "../types/emotion-types";


type Props = {
    length: number | null;
    emotion: EmotionEntity | null
}

const EmotionalGraph = (props: Props) => {
    let total = props.length ?? 0;

    if (!props.emotion)
        return <span>No results</span>
    return (
        <div>
            <div className={"flex space-x-16"}>
                <div className={"flex space-x-8"}>
                    <EmotionalBar value={props.emotion.joy / total} emotion={"😂"} color={"red"} label={"joy"}/>
                    <EmotionalBar value={props.emotion.optimism / total} emotion={"😎"} color={"red"} label={"optimism"}/>
                    <EmotionalBar value={props.emotion.sadness / total} emotion={"😥"} color={"red"} label={"sadness"}/>
                    <EmotionalBar value={props.emotion.anger / total} emotion={"😡"} color={"red"} label={"anger"}/>
                </div>

                <div>
                    <EmotionalBar value={props.emotion.hate / total} emotion={"💩"} color={"orange"} label={"hate"}/>
                </div>

                <div>
                    <EmotionalBar value={props.emotion.irony / total} emotion={"😉"} color={"green"} label={"irony"}/>
                </div>

                <div>
                    <EmotionalBar value={props.emotion.offensive / total} emotion={"🔪"} color={"yellow"} label={"offensive"}/>
                </div>

                <div className={"flex space-x-8"}>
                    <EmotionalBar value={props.emotion.positive / total} emotion={"👍"} color={"gray"} label={"positive"}/>
                    <EmotionalBar value={props.emotion.neutral / total} emotion={"😐"} color={"gray"} label={"neutral"}/>
                    <EmotionalBar value={props.emotion.negative / total} emotion={"👎"} color={"gray"} label={"negative"}/>
                </div>
            </div>
            <span className={"bg-red-100"}></span>
            <span className={"bg-orange-100"}></span>
            <span className={"bg-yellow-100"}></span>
            <span className={"bg-green-100"}></span>
            <span className={"bg-gray-100"}></span>

            <div className={"w-full flex justify-center mt-3"}>
                <span className={"font-semibold mr-3"}>Total results : </span>
                <span className={"font-semibold ml-3"}>{total}</span>
            </div>
        </div>
    )
}

export default EmotionalGraph
