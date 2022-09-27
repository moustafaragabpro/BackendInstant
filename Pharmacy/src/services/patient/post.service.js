import responses from "../../helper/responses.js";
import patientsDb from "../../db/patients.db.js";

export default async function postPatient(req , res) {
    const {name , address} = req.body ;

    const patient = {
        id : patientsDb.length , name , address
    }

    patientsDb.push(patient);


    responses.created(res , "Success" , patient )    
}