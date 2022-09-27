import responses from "../../helper/responses.js";
import medicinesDb from "../../db/medicines.db.js";

export default function deleteMedicine(req , res) {
    const {id} = req.params;

    medicinesDb.forEach((medicine , index) => {
        if(medicine.id === Number(id)) {
            medicinesDb.splice(index , 1) ;

            return responses.success(res , "Deleted successfully" , medicinesDb );
        }
    })

    return responses.badRequest(res , "medicine not found");
}