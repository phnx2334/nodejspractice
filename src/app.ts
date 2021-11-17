import express from "express";
import path from "path";
import { get404 } from "./controllers/error";

import adminRoutes from "./routes/admin";
import shopRoutes from "./routes/shop";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, "public")));

//Routes
app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(get404);

app.listen(3000);
