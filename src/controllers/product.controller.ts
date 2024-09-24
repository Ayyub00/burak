import { Request, Response } from "express";
import { T } from "../libs/types/common";
import Errors, { HttpCode, Message } from "../libs/Errors";
import ProductSevice from "../models/Product.service";
import { AdminRequest } from "../libs/types/member";
import { ProductInput } from "../libs/types/product";
//const productService = ProductSevice();
const productService = new ProductSevice();
const productController: T = {};
productController.getAllProducts = async (req: Request, res: Response) => {
  try {
    console.log("getAllProducts");
    res.render("products");
  } catch (err) {
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standart.code).json(Errors.standart);
  }
};

productController.createNewProduct = async (
  req: AdminRequest,
  res: Response
) => {

  try {
    console.log("createNewProduct");
    
    if (!req.files?.length)
      throw new Errors(HttpCode.INTERNAL_SERVER_ERROR, Message.CREATE_FAILED);
    const data: ProductInput = req.body;
    data.productImages = req.files.map((ele) => {
      return ele.path.replace(/\\/g, "/");
    });
    await productService.createNewProduct(data);
    res.send(
      `<script> alert("Create product succsed!"); window.location.replace("admin/product/all")</script>`
    );
  } catch (err) {
    const message =
    err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
  res.send(
    `<script> alert("${message}"); window.location.replace("admin/product/all")</script>`
  );
  }
};
productController.updateChosenProduct = async (req: Request, res: Response) => {
  try {
    console.log("updateChosenProduct");
    
    const id = req.params.id;
    console.log("id:", id);
    const result = await productService.updateChosenProduct(id, req.body);
    res.status(HttpCode.OK).json({ data: result });

  } catch (err) {
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standart.code).json(Errors.standart);
  }
};
export default productController;