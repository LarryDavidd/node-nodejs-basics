import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import path from "path";
import { createBrotliDecompress } from 'zlib';

const decompress = async () => {
    await pipeline(
        createReadStream('./' + path.join('src', 'zip', 'files', 'archive.gz')), 
        createBrotliDecompress(), 
        createWriteStream('./' + path.join('src', 'zip', 'files', 'fileToCompress.txt'))
    );
};

await decompress();