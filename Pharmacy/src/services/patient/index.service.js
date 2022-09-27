import deletePatient from "./delete.service.js";
import getPatients from "./get.service.js";
import postPatient from "./post.service.js";
import putPatient from "./put.service.js";


const patientsServices = {
    getPatients ,
    postPatient ,
    putPatient ,
    deletePatient
}

export default patientsServices ;