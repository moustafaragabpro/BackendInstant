import { Router } from "express";
import patientsServices from "../services/patient/index.service.js";

const patientRouter = Router() ;



// * Patients Routes
patientRouter.get("/" , patientsServices.getPatients) ;
patientRouter.post("/" , patientsServices.postPatient) ;
patientRouter.put("/:id" , patientsServices.putPatient) ;
patientRouter.delete("/:id" , patientsServices.deletePatient) ;



export default patientRouter ;