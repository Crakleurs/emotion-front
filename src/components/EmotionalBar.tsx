import {FC} from "react";

type Props = {
    value: number;
    emotion: string;
    color: string;
    label: string;
}

const EmotionalBar: FC<Props> = (props) => {
    const value = 100 - Math.floor(props.value * 100);
    const height = value + "%";

    const className = "h-64 w-8 bg-" + props.color + "-200 mx-auto rounded"
    return (
        <div className={"flex flex-col"}>
            <span className={"mt-3"}>{100 - value + "%"}</span>

            <div className={className} >
                <div style={{height: height}} className={"bg-gray-500 w-full rounded-t"}>
                </div>
            </div>
            <span></span>
            <div className="tooltip mt-3" data-tip={props.label}>
                <span className={"mt-3"}>{props.emotion}</span>
            </div>
        </div>
    )
}

export default EmotionalBar
