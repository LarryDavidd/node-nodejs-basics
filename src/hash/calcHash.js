import { readFile } from 'fs/promises';
import path from 'path';
import crypto from 'crypto';

const calculateHash = async () => {
    const hash = await readFile('./' + path.join('src', 'hash', 'files', 'fileToCalculateHashFor.txt'), 'utf8');
    console.log(crypto.createHash('sha256').update(hash).digest('hex'));
};

await calculateHash();