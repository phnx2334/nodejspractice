import express from "express";

import { getProducts } from "../controllers/products";

const routes = express.Router();

routes.get("/", getProducts);

export default routes;
