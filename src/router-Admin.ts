import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";
import productController from "./controllers/product.controller";
import makeUploader from "./libs/utils/uploader";
/** RESTAURANT **/

routerAdmin.get("/", restaurantController.goHome);

routerAdmin
  .get("/login", restaurantController.goLogin)
  .post("/login", restaurantController.processLogin);

routerAdmin
  .get("/signup", restaurantController.goSignup)
  .post(
    "/signup",
    makeUploader("members").single("memberImage"),
    restaurantController.processSignup
  );

routerAdmin.get("/logout", restaurantController.logout);

//  routerAdmin.get("/product/all", productController.getAllProducts);
// routerAdmin.post("/product/create", productController.createNewProduct);
// routerAdmin.post("/product/:id", productController.updateChosenProduct);

routerAdmin.get("/check-me", restaurantController.checkMe);


/** PRODUCT **/
routerAdmin.get(
   "/product/all",
   restaurantController.verifyRestaurant,
   productController.getAllProducts
 );
 routerAdmin.post(
   "/product/create",
   restaurantController.verifyRestaurant,
   // uploadProductImage.single("productImage"),
   makeUploader("products").array("productImages", 5),
   productController.createNewProduct
 );
 routerAdmin.post(
   "/product/:id",
   restaurantController.verifyRestaurant,
   productController.updateChosenProduct
 );

 /**  User */

 routerAdmin.get(
  "/user/all",
  restaurantController.verifyRestaurant,
  restaurantController.getUsers
);
routerAdmin.post(
  "/user/edit",
  restaurantController.verifyRestaurant,
  restaurantController.updateChosenUser
);

 /* 
     traditional API
     Rest API
     GraphQL API
  */
 

 export default routerAdmin;