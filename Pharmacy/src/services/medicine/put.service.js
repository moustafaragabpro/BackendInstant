import responses from "../../helper/responses.js";
import medicinesDb from "../../db/medicines.db.js";

export default function putMedicine(req , res) {
    const {id} = req.params;

    medicinesDb.forEach((medicine) => {
        if(medicine.id === Number(id)) {
            const {name , price} = req.body ;

            medicine.name = name ;
            medicine.price = price ;

            return responses.success(res , "Updated successfully" , medicine);
        }
    })

    return responses.badRequest(res , "medicine not found");
}