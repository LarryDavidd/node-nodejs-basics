const fs = require("fs");
const path = require("path");
const { stdout, stdin, exit } = process;

const create = async () => {
  fs.readdir(path.join(__dirname, "files"), { withFileTypes: true }, (err, files) => {
    if (err) throw new Error(err);
    files.forEach((file) => {
      if (file.name == "fresh.txt") throw new Error('FS operation failed');
    })
  });
  const output = fs.createWriteStream((path.join(__dirname, "files", "fresh.txt")), "utf-8");
  output.write("I am fresh and young");
  stdout.write("file was create");
};

create();