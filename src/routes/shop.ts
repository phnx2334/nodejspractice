import express from "express";
import {
  getIndex,
  getCart,
  getOrders,
  getCheckout,
  getProducts,
  getProduct,
} from "../controllers/shop";

const router = express.Router();

router.get("/", getIndex);

router.get("/products", getProducts);

router.get("/products/:id", getProduct);

router.get("/cart", getCart);

router.get("/orders", getOrders);

router.get("/checkout", getCheckout);

export default router;
