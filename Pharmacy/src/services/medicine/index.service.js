import deleteMedicine from "./delete.service.js";
import getMedicine from "./get.service.js";
import postMedicine from "./post.service.js";
import putMedicine from "./put.service.js";

const medicinesService = {
    getMedicine ,
    postMedicine ,
    putMedicine ,
    deleteMedicine

}

export default medicinesService ;