import { Router } from "express";
import medicinesService from "../services/medicine/index.service.js";

const router = Router() ;

// * Medicines Routes
router.get("/" , medicinesService.getMedicine) ;
router.post("/" , medicinesService.postMedicine) ;
router.put("/:id" , medicinesService.putMedicine) ;
router.delete("/:id" , medicinesService.deleteMedicine) ;



export default router ;