import fs from "fs";
import path from "path";
import rootDir from "../Utils/path";

export interface IProducts {
  title: string;
}

const p = path.join(rootDir, "data", "products.json");

const readProducts = (callback: any) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return callback([]);
    } else {
      return callback(JSON.parse(fileContent.toString()));
    }
  });
};

export class Product {
  title;
  constructor(t: string) {
    this.title = t;
  }

  save() {
    readProducts((products: IProducts[]) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log("error on stringify", err);
      });
    });
  }

  static fetchAll(callback: any) {
    readProducts(callback);
  }
}
