import { GraphData, Options } from "../types";
import "./style.css";
declare const Tooltip: ({ options, position, d, isShow, }: {
    options: Options & {
        svgWidth: number;
        svgHeight: number;
        tipFormatter?: ((d: GraphData) => JSX.Element) | undefined;
    };
    position: number[];
    d: GraphData;
    isShow: boolean;
}) => JSX.Element;
export default Tooltip;
