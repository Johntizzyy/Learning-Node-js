//CREATING  SERVER

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("request made");
  console.log(req.url, req.method);

  // Set content header
  // res.setHeader('Content-Type','text/plain')  -- To send a normal plain text
  res.setHeader("Content-Type", "text/html");
  //   res.write("<h1>Hello, I'm Johntizzy</h1>");
  // res.write('Hi I\'m Johntizzy')

  let path = "./HTML/";

  switch (req.url) {
    // case "/"&&"/home":
    case "/":
      path += "index.html";
      break;    
    case "/home":
      path += "index.html";
      break;
    case "/about":
      path += "about.html";
      break;

    default:
      path += "404.html";
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // res.write(data)
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for request on port 3000");
});
