import {FC} from "react";

type Props = {
    value: number,
    emotion: string,
}

const EmotionalBar: FC<Props> = (props) => {
    const value = 100 - Math.floor(props.value * 100);
    const height = value + "%";

    return (
        <div className={"flex flex-col"}>
            <span className={"mt-3"}>{100 - value + "%"}</span>

            <div className={"h-64 w-8 bg-red-200 mx-auto rounded"} >
                <div style={{height: height}} className={"bg-gray-500 w-full rounded-t"}>
                </div>
            </div>
            <span></span>
            <span className={"mt-3"}>{props.emotion}</span>
        </div>
    )
}

export default EmotionalBar
