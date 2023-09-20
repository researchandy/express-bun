import express,{Request,Response} from "express";
const app = express();

app.use(express.json());

app.get("/", (req:Request,res:Response)=>{
	res.send("This is epic");	
});


app.listen(1337,()=>{
	console.log("Faze up on 1337");
});
