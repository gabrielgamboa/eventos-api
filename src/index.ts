import express from "express";
import { routes } from "./routes";
import "reflect-metadata";
import "./database";

const app = express();
const port = 3333;

app.use(express.json());
app.use(routes);

app.listen(port, () => console.log(`Server is running on port ${port}`));