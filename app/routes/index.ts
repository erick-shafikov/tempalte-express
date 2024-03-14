import express from "express";

import defaultController from "@app/controllers/_defaultController";
import headerValidator from "@app/middlewares/headersValidate";

const router = express.Router();

router.use("/main", [headerValidator, defaultController]);

export default router;
