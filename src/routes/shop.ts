import express from "express";

import { products } from "../controllers/products";

const routes = express.Router();

routes.get("/", (req, res, next) => {
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

export default routes;
