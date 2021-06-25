const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("masukan angka? ", function (nilai) {
  rl.question("berapa kali nilai di loop ? ", function (loop) {
    function recursive(angka) {
      angka = angka
        .split("")
        .map((a) => parseInt(a))
        .reduce((a, b) => a + b);

      return angka;
    }

    nilai = nilai.repeat(loop);
    console.log(recursive(nilai));

    rl.close();
  });
});

rl.on("close", function () {
  process.exit(0);
});
