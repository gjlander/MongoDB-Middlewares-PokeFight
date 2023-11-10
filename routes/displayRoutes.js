import express from "express";
import { display, makeDisplay } from "../controllers/displayControllers.js";

const displayRouter = express.Router();

displayRouter.route("/").get(display).post(makeDisplay);
// .put(editDisplay)

export default displayRouter;
