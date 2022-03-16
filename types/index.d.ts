import { GraphData, GraphMetaData } from "./types";
declare const ContributeGraph: ({ data, size, gap, monthBarHeight, weekBarWidth, marginLeft, marginTop, fontSize, fontColor, radius, emptyColor, tipFormatter, colors, range, }: {
    data: GraphMetaData[];
    size?: number | undefined;
    gap?: number | undefined;
    monthBarHeight?: number | undefined;
    weekBarWidth?: number | undefined;
    marginLeft?: number | undefined;
    marginTop?: number | undefined;
    fontSize?: number | undefined;
    fontColor?: string | undefined;
    radius?: number | undefined;
    tipFormatter?: ((d: GraphData) => JSX.Element) | undefined;
    emptyColor?: string | undefined;
    colors?: string[] | ((d: GraphData) => string) | undefined;
    range?: [number, number] | undefined;
}) => JSX.Element;
export default ContributeGraph;
