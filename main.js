"use strict";

const fs = require("fs");

function readJSON(filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, "utf8", (err, content) => {
      if (err) {
        reject(err);
      } else {
        try {
          resolve(JSON.parse(content));
        } catch (err) {
          reject(err);
        }
      }
    });
  });
}

readJSON("./data/products.json").then(console.log);
