import express from "express"
import { BandController } from "../BandController"

export const bandRouter = express.Router()

const bandController = new BandController()

bandRouter.get("/:id", bandController.getBand)
bandRouter.post("/", bandController.createBand)
