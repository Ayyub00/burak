import { Request, Response } from "express";
import { T } from "../libs/types/common";
import Errors from "../libs/Errors";
import ProductSevice from "../models/Product.service";
//const productService = ProductSevice();
const productController: T = {};
productController.getAllProducts = (req: Request, res: Response) => {
  try {
    console.log("getAllProducts");
    res.render("products");
  } catch (err) {
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standart.code).json(Errors.standart);
  }
};
productController.createNewProduct = (req: Request, res: Response) => {
  try {
    console.log("createNewProduct");
    res.send("createNewProduct");
  } catch (err) {
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standart.code).json(Errors.standart);
  }
};
productController.updateChosenProduct = (req: Request, res: Response) => {
  try {
    console.log("updateChosenProduct");
    res.send("updateChosenProduct");
  } catch (err) {
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standart.code).json(Errors.standart);
  }
};
export default productController;