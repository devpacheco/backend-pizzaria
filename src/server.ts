import express, {Request, Response, NextFunction} from "express";
import "express-async-errors";
import path from 'path';
import cors from 'cors';

import { router } from "./routes";
import fileUpload from "express-fileupload";

const app = express();

app.use(express.json());
app.use(cors());
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 } //No Maximo 50mb
}))
app.use(router);

app.use(
    '/files',
    express.static(path.resolve(__dirname, '..', 'tmp'))
)

app.use((err: Error, req: Request, res: Response, next: NextFunction)=>{
    if(err instanceof Error){
        //se for uma instancia do tipo error
        res.status(400).json({
            error: err.message
        })
    }
    res.status(500).json({
        status: "error",
        message: "Internal server error."
    })
})

app.listen(process.env.PORT, ()=> console.log("Servidor online!!"))