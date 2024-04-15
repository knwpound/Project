import express from "express";

import * as playerController from "../controllers/playerControllers.js";

const router = express.Router();

router.get("/", playerController.getPlayers);
router.post("/", playerController.createPlayer);
router.delete("/:id", playerController.deletePlayer);

export default router;