import express from "express";
import {
  getIndex,
  getCart,
  getOrders,
  getCheckout,
  getProducts,
} from "../controllers/shop";
import router from "./admin";

const routes = express.Router();

router.get("/", getIndex);

router.get("/products", getProducts);

router.get("/cart", getCart);

router.get("/orders", getOrders);

router.get("/checkout", getCheckout);

export default routes;
