import fs from "fs";
import path from "path";

const copy = () => {
  if (!fs.existsSync(path.join(__dirname, 'files')) || fs.existsSync(path.join(__dirname, 'files-copy'))) {
    throw new Error('FS operation failed');
  }
  fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }, (err) => {
    if (err) throw err;
    console.log(`folder files-copy was copied`);
  });
  fs.readdir(path.join(__dirname, 'files'), { withFileTypes: true }, (err, files) => {
    files.forEach((file) => {
      fs.copyFile(
        path.join(__dirname, 'files', file.name),
        path.join(__dirname, 'files-copy', file.name),
        (err) => {
          if (err) return err;
          console.log(`file ${file.name} was copied`);
        }
      );
    });
  });
};

copy();
