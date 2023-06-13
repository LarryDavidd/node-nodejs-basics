const fs = require("fs");
const path = require("path");

const list = () => {
  if (!fs.existsSync(path.join(__dirname, 'files'))) {
    throw new Error('FS operation failed');
  } else {
    fs.readdir(path.join(__dirname, 'files'), (err, files) => {
      if (err) throw new Error(err);
      console.log(files);
    });
  }
};

list();