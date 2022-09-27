import receiptDb from "../../db/receipt.db.js";
import responses from "../../helper/responses.js";


export default function deleteReceipt(req , res) {
    const {id} = req.params;

    receiptDb.forEach((receipt , index) => {
        if(receipt.id === Number(id)) {
            receiptDb.splice(index , 1) ;

            return responses.success(res , "Deleted successfully" , receiptDb );
        }
    })

    return responses.badRequest(res , "Receipt not found");
}