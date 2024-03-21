import express from "express";

import main from "@app/controllers/main";
import middleware from "@app/middlewares/middleware";

const router = express.Router();

router.use("/", [middleware, main]);

export default router;
