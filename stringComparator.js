const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];

rl.question("masukan angka: ", function (angka) {
  let recusive = function () {
    for (let i = 1; i <= angka; i++) {
      rl.question("masukan nama dan score: ", function (nama) {
        arr.push(nama.split(" "));
        console.log(arr);
        console.log(i);
        if (i <= angka) {
          recusive();
        } else {
          rl.close();
        }
      });
    }
  };

  recusive();
});

rl.on("close", function () {
  process.exit(0);
});
