"use strict";

var fs = require("fs");
const readFile = fs.promises.readFile;
const appendFile = fs.promises.appendFile;

let product = {
  title: "Cactus",
  type: "flowers",
  description: "This cactus can bloom",
  price: 28.64,
};

let data = JSON.stringify(product, null, 2);

read();
write();

async function read() {
  const readableData = await readFile("./data/products.json", "utf-8");
  console.log(readableData);
}

async function write() {
  const recordedData = await appendFile(
    "./data/products.json",
    data + ",\n",
    "utf8"
  );
  console.log("Data written to file");
}
