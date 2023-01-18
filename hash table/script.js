const hash = (key, arrLen) => {
  let total = 0;
  let prime = 31;

  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * prime + value) % arrLen;
  }
  return total;
};
