import fs from "fs";
import path from "path";
import { stdout } from "process";

const read = () => {
    const stream = fs.createReadStream((path.join("src", "streams", "files", "fileToRead.txt")), "utf-8");
    stream.on("data", (chunk) => stdout.write(chunk));
    stream.on("error", e => console.log(e.message));
};

read();