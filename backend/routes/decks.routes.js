import express from "express";
import {Router} from "express";
import createDeck from "../controllers/decks/createDeck.js";
const router = Router();
router.post("/create", createDeck)
export default router;