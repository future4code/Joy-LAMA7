import express from "express"
import { ShowController } from "../ShowController"

export const showRouter = express.Router()

const showController = new ShowController()

showRouter.post("/", showController.createShow)
showRouter.get("/", showController.selectAllShowsOfDate)