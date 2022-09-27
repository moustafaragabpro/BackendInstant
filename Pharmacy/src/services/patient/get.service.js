import responses from "../../helper/responses.js";

import patientsDB from '../../db/patients.db.js';

export default function getPatients(req , res) {
    responses.success(res , "Success" , patientsDB )    
}