import path from "path";
import { Flow } from "flow-launcher-helper";
import { FlowPlugin } from "./flowPlugin";

const plugin = new Flow<{ open_result: false }>(path.resolve(__dirname, "../assets/icon.png"));

plugin.on("query", parameters => {
    return plugin.showResult({
        title: parameters.join(" "),
        subtitle: "Search Phind",
        method: "open_result",
        params: 
    });
});
