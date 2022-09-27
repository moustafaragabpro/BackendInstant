import responses from "../../helper/responses.js";
import receiptDb from "../../db/receipt.db.js";


export default function getReceipts(req , res) {
    responses.success(res , "Success" , receiptDb )    
}