const http = require("http");
const fs = require("fs");
let data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
let fruits = "";
for (let i = 0; i < data.length; i++) {
  let { productName, from, nutrients, quntity, price, description } = data[i];
  fruits += `<div style="border:1px solid #000;margin:30px 0">
  <h3>Fruit Name: ${productName}</h3>
  <p>Country: ${from}</p>
  <p>Nutrients: ${nutrients}</p>
  <p>Quntity: ${quntity}</p>
  <p>Price: ${price}</p>
  <p>Description: ${description}</p>
  </div>`;
}

const server = http.createServer((req, res) => {
  console.log(req);
  let path = req.url;
  res.writeHead(200, {
    "Content-Type": "text/html",
  });
  if (path === "/") {
    res.end("<h1>Hello from Port 3030</h1><a href='/fruits'>Go to Fruits</a>");
  } else if (path === "/fruits") {
    res.end(fruits);
  }
});

server.listen(3030, () => {
  console.log("Listening on Port 3030");
});

// console.log(path.dirname(__dirname));
// D:\OneDrive\OneDrive\Desktop\Netifly
