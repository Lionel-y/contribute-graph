import ContributeGraph from ".";
import { render } from "react-dom";
import { getData } from "./mock";

const data = getData();

render(<ContributeGraph data={data} />, document.getElementById("root"));
