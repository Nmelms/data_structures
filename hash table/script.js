// const hash = (key, arrLen) => {
//   let total = 0;
//   let prime = 31;

//   for (let i = 0; i < Math.min(key.length, 100); i++) {
//     let char = key[i];
//     let value = char.charCodeAt(0) - 96;
//     total = (total * prime + value) % arrLen;
//   }
//   return total;
// };
class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let prime = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * prime + value) % 53;
    }
    return total;
  }

  set(key, value) {
    console.log(key);
    let hash = this._hash(key);
    this.keyMap[hash]
      ? this.keyMap[hash].push([key, value])
      : (this.keyMap[hash] = [[key, value]]);
  }

  get(key) {
    let hash = this._hash(key);

    if (this.keyMap[hash]) {
      for (let i = 0; i < this.keyMap[hash].length; i++) {
        if (this.keyMap[hash][i][0] === key) {
          return this.keyMap[hash][i][1];
        }
      }
    }
    return undefined;
  }
  keys() {
    let keys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keys.includes(this.keyMap[i][j][0])) {
            keys.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keys;
  }
  values() {
    let keys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keys.includes(this.keyMap[i][j][1])) {
            keys.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return keys;
  }
}

const table = new HashTable();
table.set("one", "1");
table.set("two", "2");
table.set("three", "3");
table.set("four", "4");
table.set("five", "5");
table.set("six", "5");
