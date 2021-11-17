import express from "express";

import { IProducts, Product } from "../models/product";

export const getProducts = (req: express.Request, res: express.Response) => {
  Product.fetchAll((products: IProducts[]) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "All Products",
      path: "/products",
    });
  });
};

export const getIndex = (req: express.Request, res: express.Response) => {
  Product.fetchAll((products: IProducts[]) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
    });
  });
};

export const getCart = (req: express.Request, res: express.Response) => {
  res.render("shop/cart", {
    path: "/cart",
    pageTitle: "Your Cart",
  });
};

export const getOrders = (req: express.Request, res: express.Response) => {
  res.render("shop/orders", {
    path: "/orders",
    pageTitle: "Your Orders",
  });
};

export const getCheckout = (req: express.Request, res: express.Response) => {
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout",
  });
};
