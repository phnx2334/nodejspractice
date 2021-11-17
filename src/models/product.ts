import fs from "fs";
import path from "path";
import rootDir from "../Utils/path";

export interface IProduct {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  price: string;
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
  id;
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
    this.id = Math.random().toString();
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductsFromFile((products: IProduct[]) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb: any) {
    getProductsFromFile(cb);
  }

  static findById(id: string, cb: any) {
    getProductsFromFile((products: IProduct[]) => {
      const product = products.find((p) => p.id === id);
      cb(product);
    });
  }
}
