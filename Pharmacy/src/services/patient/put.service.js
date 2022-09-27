import patientsDb from "../../db/patients.db.js";
import responses from "../../helper/responses.js";


export default function putPatient(req , res) {
    const {id} = req.params;

    patientsDb.forEach((patient) => {
        if(patient.id === Number(id)) {
            const {name , address} = req.body ;

            patient.name = name ;
            patient.address = address ;

            return responses.success(res , "Updated successfully" , patient);
        }
    })

    return responses.badRequest(res , "patient not found");
}