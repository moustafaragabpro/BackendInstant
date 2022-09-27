import responses from "../../helper/responses.js";
import receiptDb from "../../db/receipt.db.js";


export default async function postReceipt(req , res) {
    const {patient_id , medicines} = req.body ;

    const receipt = {
        id : receiptDb.length , patient_id , medicines
    }

    receiptDb.push(receipt);


    responses.created(res , "Success" , receipt )    
}