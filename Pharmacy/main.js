import  express  from "express";
import router from "./src/controllers/index.controllers.js";

const app = express() ;

app.use(express.json()) ;

app.use('/medicines' , router.medicineRouter);
app.use('/patients' , router.patientRouter);
app.use('/receipts' , router.recieptRouter);

app.get('/' , (req , res) => {
    res.send("Working")
})


app.listen(5000);