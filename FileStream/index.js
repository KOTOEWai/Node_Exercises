
// buffer is a chunk of data that is stored in memory as a sequence of bytes or numbers.
// stream is a sequence of data that is stored in memory as a sequence of bytes or numbers.

const fs = require("fs");
/*
// Async Read File 
fs.readFile("text.txt", "utf8", (err, data) => {
  if (err) return console.log(err);
  console.log(data);
});


// Sync Read File
const data = fs.readFileSync("text.txt", "utf8");
console.log(data);
console.log("-----------------------------------");


// example of file write and append
fs.writeFile("hello.txt", "Hello World!", (err) => {
  if (err) console.log(err);
  console.log("File written!");
});

fs.writeFileSync("hello1.txt", "Hello World!");
console.log("File written!");


// append file 
fs.appendFileSync("hello1.txt", "Hello World! 2 times");  //APPEND FILE (File ထဲမှာ data ဆက်ထည့်)
console.log("File appended!");

//fs.unlinkSync("hello1.txt");
//console.log("File deleted!");

//fs.rename("old.txt", "new.txt", (err) => {
 // if (err) console.log(err);
 // console.log("Renamed!");
//});

// rename
fs.renameSync("hello.txt", "new.txt");
console.log("Renamed!");


// create folder
fs.mkdir("myFolder", (err) => {
  console.log("Folder created!");
});

// delete folder

fs.rmdir("myFolder", (err) => {
  console.log("Folder removed!");
});
*/


// Stream Example

// Create a readable stream
const readStream = fs.createReadStream("big.txt");
readStream.on("data", (chunk) => {
  console.log("Chunk received: ", chunk);
});


//===============================//==========================//



const writeStream = fs.createWriteStream("copy.txt");
readStream.pipe(writeStream);

readStream.on("end", () => {
  console.log("Read stream completed.");
});

writeStream.on("finish", () => {
  console.log("Write stream completed.");
});

fs.readFile("toe.txt","utf8").then((data)=>{
    console.log(data);

}).catch((error)=>{
    console.log(error);
})