import { Request, Response } from "express";
import * as customerService from "../services/customerservice";

export const getAllCustomers = async (
  req: Request,
  res: Response
) => {

  const customers = await customerService.getCustomers();

  res.json(customers);

};

export const createCustomer = async (
  req: Request,
  res: Response
) => {

  const result = await customerService.addCustomer(req.body);

  res.status(201).json({
    message: "Customer Added Successfully",
    result
  });

};