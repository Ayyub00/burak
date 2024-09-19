import express from "express";
 const routerAdmin = express.Router();
 import restaurantController from "./controllers/restaurant.controller";

 routerAdmin.get("/", restaurantController.goHome);

 routerAdmin.get("/login", restaurantController.getLogin).post("/login", restaurantController.processLogin);
 routerAdmin
   .get("/singup", restaurantController.getSignup).post("/signup", restaurantController.processSignup);
   routerAdmin.get("/logout", restaurantController.logout);
routerAdmin.get("/check-me", restaurantController.checkAuthSession);
 /**  Product */

 /**  User */

 /* 
     traditional API
     Rest API
     GraphQL API
  */
 

 export default routerAdmin;