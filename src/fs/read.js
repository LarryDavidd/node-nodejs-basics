import fs from "fs";
import path from "path";

const read = () => {
  if (!fs.existsSync(path.join(__dirname, 'files', 'fileToRead.txt'))) {
    throw new Error('FS operation failed');
  } else {
    fs.createReadStream(path.join(__dirname, 'files', 'fileToRead.txt'), "utf-8").on("data", (chunk) => console.log(chunk));
  }
};

read();