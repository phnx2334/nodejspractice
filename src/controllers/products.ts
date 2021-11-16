import express from "express";

interface IProducts {
  title: string;
}

export const products: IProducts[] = [];

export const getAddProduct = (req: any, res: any, next: any) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

export const postAddProduct = (req: any, res: any, next: any) => {
  products.push({ title: req.body.title });
  res.redirect("/");
};
