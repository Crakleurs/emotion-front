import EmotionalBar from "./EmotionalBar";
import React from "react";

const EmotionalGraph = () => {
    const stats = []
    let total = 0;
    for (let i = 0; i < 6; i++) {
        const generatedNumber = Math.floor(Math.random() * 1000);
        stats.push(generatedNumber)
        total += generatedNumber;
    }

    return (
        <div>
            <span className={"font-bold text-2xl"}>Results</span>
            <div className={"flex space-x-8"}>
                <EmotionalBar value={stats[0] / total} emotion={"😂"}/>
                <EmotionalBar value={stats[1] / total} emotion={"😊"}/>
                <EmotionalBar value={stats[2] / total} emotion={"😐"}/>
                <EmotionalBar value={stats[3] / total} emotion={"🤨"}/>
                <EmotionalBar value={stats[4] / total} emotion={"😠"}/>
                <EmotionalBar value={stats[5] / total} emotion={"😥"}/>
            </div>

        </div>

    )
}

export default EmotionalGraph
