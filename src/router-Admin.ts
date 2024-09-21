import express from "express";
 const routerAdmin = express.Router();
 import restaurantController from "./controllers/restaurant.controller";
 import productController from "./controllers/product.controller";

 routerAdmin.get("/", restaurantController.goHome);

 routerAdmin.get("/login", restaurantController.getLogin).post("/login", restaurantController.processLogin);
 routerAdmin
   .get("/singup", restaurantController.getSignup).post("/signup", restaurantController.processSignup);
   routerAdmin.get("/logout", restaurantController.logout);
routerAdmin.get("/check-me", restaurantController.checkAuthSession);
 /**  Product */

//  routerAdmin.get("/product/all", productController.getAllProducts);
// routerAdmin.post("/product/create", productController.createNewProduct);
// routerAdmin.post("/product/:id", productController.updateChosenProduct);

routerAdmin.get(
   "/product/all",
   restaurantController.verifyRestaurant,
   productController.getAllProducts
 );
 routerAdmin.post(
   "/product/create",
   restaurantController.verifyRestaurant,
   productController.createNewProduct
 );
 routerAdmin.post(
   "/product/:id",
   restaurantController.verifyRestaurant,
   productController.updateChosenProduct
 );

 /**  User */

 /* 
     traditional API
     Rest API
     GraphQL API
  */
 

 export default routerAdmin;