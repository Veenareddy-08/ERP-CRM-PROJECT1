import {Request,Response} from "express";
import * as service from "../services/inventoryservices";


export const stockIn=async(req:Request,res:Response)=>{

const result=await service.addStock(req.body);

res.json({
message:"Stock Added",
result
});

};



export const stockOut=async(req:Request,res:Response)=>{

try{

const result=await service.removeStock(req.body);

res.json({
message:"Stock Removed",
result
});

}
catch(error:any){

res.status(400).json({
error:error.message
});

}

};