import responses from "../../helper/responses.js";
import medicinesDb from "../../db/medicines.db.js";

export default function postMedicine(req , res) {
    const {name , price} = req.body ;

    const medicine = {
        id : medicinesDb.length , name , price
    }

    medicinesDb.push(medicine);
    responses.created(res , "Success" , medicine )    
}