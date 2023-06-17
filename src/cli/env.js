const parseEnv = () => {
  let res = new Set();
  for (i in process.env) {
    if (i.startsWith('RSS_')) {
      res.add(`${i}=${process.env[i]};`);
    }
  }
  console.log(...res);
};

parseEnv();