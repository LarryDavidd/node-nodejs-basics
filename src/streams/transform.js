import { Transform, pipeline } from "stream";

const transform = async () => {
  const transformedData = new Transform({
    transform(chunk, _, callback) {
      callback(null, chunk.toString().trim().split("").reverse().join("") + '\n');
    }
  });

  pipeline(process.stdin, transformedData, process.stdout, err => {
    if (err) {
      throw new Error("Error during data transformation");
    }
  });
};

await transform();