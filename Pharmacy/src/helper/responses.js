function success(res , message , data) {
    res.status(200).json({message , data});
}
function created(res , message , data) {
    res.status(201).json({message , data});
}
function badRequest(res , message) {
    res.status(400).json({message});
}

const responses = {success , created , badRequest}
 
export default responses ; 