import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import path from "path";
import { createBrotliCompress } from 'zlib';

const compress = async () => {
    await pipeline(
        createReadStream('./' + path.join('src', 'zip', 'files', 'fileToCompress.txt')), 
        createBrotliCompress(), 
        createWriteStream('./' + path.join('src', 'zip', 'files', 'archive.gz'))
    );
};

await compress();