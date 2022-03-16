import { GraphData, Options } from "../types";
import "./style.css";
declare const Days: ({ data, options, onMouseOver, onMouseLeave, }: {
    data: GraphData[][];
    options: Options & {
        colorMap: (d: GraphData) => string;
    };
    onMouseOver: any;
    onMouseLeave: any;
}) => JSX.Element;
export default Days;
