import { spawn } from 'child_process';
import path from 'path';

const spawnChildProcess = async (args) => {
    // Write your code here
    spawn('node', ['./' + path.join('src', 'cp', 'files', 'script.js'), ...args], {
        stdio: [process.stdin, process.stdout, 'ipc'],
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess([1, 2, 3]);
