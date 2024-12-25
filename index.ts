import "module-alias/register";
import express, { Express } from "express";
import "dotenv/config";
import cors from "cors";

import router from "@app/routes";
import bodyParser from "body-parser";

// ----------------------------------------------------------------------

const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/", router);

app.listen(port, () => {
  console.log(`[server]: Server is running`);
});
