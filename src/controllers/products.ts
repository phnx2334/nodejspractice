import express from "express";
import { IProducts } from "../models/product";

import { Product } from "../models/product";

export const getAddProduct = (req: express.Request, res: express.Response) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

export const postAddProduct = (req: express.Request, res: express.Response) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

export const getProducts = (req: express.Request, res: express.Response) => {
  Product.fetchAll((products: IProducts[]) => {
    res.render("shop", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};
