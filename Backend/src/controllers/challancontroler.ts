import {Request,Response} from "express";
import * as service from "../services/challanservice";


export const create = async(
req:Request,
res:Response
)=>{

const result = await service.createChallan(req.body);

res.status(201).json({
    message:"Challan Created",
    result
});

};



export const getAll = async(
req:Request,
res:Response
)=>{

const data = await service.getChallans();

res.json(data);

};



export const confirmChallan = async(
req: Request,
res: Response
)=>{

try{

const result = await service.confirmChallan(
    Number(req.params.id)
);

res.json({
    message:"Challan Confirmed",
    result
});

}
catch(error:any){

res.status(400).json({
    message:error.message
});

}

};



export const addItem = async(
req: Request,
res: Response
)=>{

try{

const result = await service.addItem(
    Number(req.params.id),
    req.body
);

res.json({
    message:"Item Added",
    result
});

}
catch(error:any){

res.status(400).json({
    message:error.message
});

}

};