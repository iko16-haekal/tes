const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function rotateLeft(arr, loop) {
  for (let i = 1; i <= loop; i++) {
    let first = arr.shift();
    arr.push(first);
  }
  return arr;
}

rl.question("masukan angka? ", function (angka) {
  rl.question("berapa kali array di rotate ? ", function (rotate) {
    let arr = [];
    for (let i = 1; i <= angka; i++) {
      arr.push(i);
    }
    console.log(rotateLeft(arr, rotate));
    rl.close();
  });
});

rl.on("close", function () {
  process.exit(0);
});
