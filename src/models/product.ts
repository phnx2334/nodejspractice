import fs from "fs";
import path from "path";
import rootDir from "../Utils/path";

export interface IProducts {
  title: string;
}

const p = path.join(rootDir, "data", "products.json");

const getProductsFromFile = (cb: any) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent.toString()));
    }
  });
};

export class Product {
  title;
  imageUrl;
  description;
  price;
  constructor(
    title: string,
    imageUrl: string,
    description: string,
    price: string
  ) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductsFromFile((products: IProducts[]) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb: any) {
    getProductsFromFile(cb);
  }
}
