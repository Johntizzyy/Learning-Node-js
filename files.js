//FILES SYSTEM

//Reading files

// const fs = require("fs");

// fs.readFile('./file1.txt', (err,data) => {
//     if(err){
//         console.log(err)
//     }
//     console.log(data)
//     console.log(data.toString())
// })

//Writing files

// fs.writeFile('./file1.txt','This is me rewriting this file', () => {
//     console.log('file was written')
// })
const fs = require("fs");

if (fs.existsSync("./file2.pdf")) {
  fs.writeFile("./file1", "This is a new text", () => {
    console.log("File has been written");
  });
} else {
  console.log("File not found");
}

//Directories

// if (!fs.existsSync("./newFolder")) {

//   fs.mkdir("./newFolder", (err) => {
//     if (err) {
//       console.log(err);

//     }
//     console.log("folder created succesfully");

//   });

// } else {
//   fs.rmdir("./newFolder", (err) => {

//     if (err) {
//       console.log(err);

//     }
//     console.log("folder deleted succesfully");

//   });

// }

//Deleteing files

// if(fs.existsSync('./deleteme.txt')){

//     fs.unlink('deleteme.txt', (err) => {

//         if(err){
//             console.log(err)
//         }
//         console.log('file deleted successfully')
//     })
// }
