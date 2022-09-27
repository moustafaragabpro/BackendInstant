import patientsDb from "../../db/patients.db.js";
import responses from "../../helper/responses.js";


export default function deletePatient(req , res) {
    const {id} = req.params;

    patientsDb.forEach((medicine , index) => {
        if(medicine.id === Number(id)) {
            patientsDb.splice(index , 1) ;

            return responses.success(res , "Deleted successfully" , patientsDb );
        }
    })

    return responses.badRequest(res , "Patient not found");
}