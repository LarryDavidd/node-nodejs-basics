const fs = require("fs");
const path = require("path");

const rename = () => {
  if (!fs.existsSync(path.join(__dirname, 'files', 'wrongFilename.txt')) || 
       fs.existsSync(path.join(__dirname, 'files', 'properFilename.md')))
  {
    throw new Error('FS operation failed');
  } else {
    fs.rename(
      path.join(__dirname, 'files', 'wrongFilename.txt'), 
      path.join(__dirname, 'files', 'properFilename.md'), 
      (err) => {
        if (err) return err;
        console.log(`file wrongFilename.txt was renamed`);
      }
    );
  }
};

rename();