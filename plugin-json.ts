import packageJson from "./package.json";
import fs from "fs";
import path from "path";

const plugin = {
    ID: "1648c958e10842a7929cae11f6dabefb", // Generated externally
    ActionKeyword: "p?",
    Name: "Phind",
    Description: "Integration with Phind.com",
    Author: packageJson.author.name,
    Version: packageJson.version,
    Language: "typescript",
    Website: packageJson.repository.url,
    ExecuteFileName: packageJson.main,
    IcoPath: "assets/icon.png"
}

fs.writeFileSync(path.resolve(__dirname, "plugin.json"), JSON.stringify(plugin, null, 4));
