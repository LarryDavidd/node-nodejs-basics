const { argv, stdout } = process;

const parseArgs = () => {
  const arg = argv.slice(2);
  for (let i = 0; i < arg.length; i += 2) {
    stdout.write(`${arg[i].slice(2)} is ${arg[i + 1]}, `);
  }
};

parseArgs();