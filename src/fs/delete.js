const fs = require("fs");
const path = require("path");

const remove = () => {
  if (!fs.existsSync(path.join(__dirname, 'files', 'fileToRemove.txt'))) {
    throw new Error('FS operation failed');
  } else {
    fs.unlink(path.join(__dirname, 'files', 'fileToRemove.txt'), (err) => {
      if (err) throw new Error(err);
      console.log("file was delete");
    });
  }
};

remove();