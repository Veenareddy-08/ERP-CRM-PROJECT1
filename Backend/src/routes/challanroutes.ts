import express from "express";

import {
  create,
  getAll,
  confirmChallan,
  addItem
} from "../controllers/challancontroler";


const router = express.Router();


router.post("/", create);

router.get("/", getAll);

router.put("/:id/confirm", confirmChallan);

router.post("/:id/items", addItem);


export default router;