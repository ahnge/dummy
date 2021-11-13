// MIND GRANADE
// OS MODULE
// PATH MODULE
// FS MODULE(fs sync)
// FS MODULE(fs async)

/* module.exports.items = ["item1", "item2"];
const persons = {
  name: "bob",
};
module.exports.person = persons.name; */

// MIND GRANADE

/* const num1 = 6;
const num2 = 7;

const addd = () => {
  console.log(num1 + num2);
};
addd(); */

/* ------------------------------------------------------------
 */

const osModule = require("os");

/* const os = require("os");

// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOs = {
  name: os.type(),
  rellease: os.release(),
  totelMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOs); */

const pathModule = require("path");

/* const path = require("path");
console.log(path.sep);

const filePath = path.join("./content", "sub", "text.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "sub", "text.txt");
console.log(absolute); */

const fsModuleSync = require("fs");

/* const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/sub/second.txt", "utf8");

console.log(first, second);
 
writeFileSync(
  "./content/result-sync.txt", // location
  `Here is the result ${first}, ${second}` // text file
  // add new
);
console.log("writing done"); */

const fsModuleAsync = require("fs");

/* const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log("this is error: ", err);
    return;
  } else {
    console.log(result);
  }

  const first = result;

  readFile("./content/sub/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log("this is error", err);
      return;
    } else {
      console.log(result);
    }

    const second = result;

    writeFile(
      "./content/result-async.txt",
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log("this is error", err);
          return;
        } else {
          console.log(result, "gg");
        }
      }
    );
  });
}); */
