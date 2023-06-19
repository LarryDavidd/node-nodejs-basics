import fs from "fs";
import path from "path";
import { stdout, stdin, exit } from "process";

const write = () => {
    const output = fs.createWriteStream((path.join("src", "streams", "files", "fileToWrite.txt")), "utf-8");

    stdout.write("hello! \n");
    stdout.write("please enter any text \n");
    stdin.on("data", (data) => {
        const dataString = data.toString();
        if (dataString.includes("exit")) {
            exit();
        } else {
            output.write(dataString);
        }
    });

    process.on("exit", () => stdout.write("bye!"));
    process.on('SIGINT', () => exit());
};

write();