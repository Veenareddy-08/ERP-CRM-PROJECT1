import express from "express";

import {
stockIn,
stockOut
}
from "../controllers/inventorycontrollers";


const router=express.Router();


router.post("/in",stockIn);

router.post("/out",stockOut);


export default router;