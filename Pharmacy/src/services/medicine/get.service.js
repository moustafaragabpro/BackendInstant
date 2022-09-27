import responses from "../../helper/responses.js";
import medicinesDb from "../../db/medicines.db.js";

export default function getMedicine(req , res) {
    responses.success(res , "Success" , medicinesDb )    
}