import { Router } from "express";
import receiptServices from "../services/receipt/index.service.js";

const recieptRouter = Router() ;


recieptRouter.get("/" , receiptServices.getReceipts) ;
recieptRouter.post("/" , receiptServices.postReceipt) ;
// recieptRouter.put("/:id" , receiptServices.putMedicine) ;
recieptRouter.delete("/:id" , receiptServices.deleteReceipt) ;



export default recieptRouter ;