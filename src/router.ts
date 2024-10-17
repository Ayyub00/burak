import express from "express";
 const router = express.Router();
 import memberController from "./controllers/member.controller";

//  router.get("/", memberController.goHome);

//  router.get("/login", memberController.getLogin);

//  router.get("/singup", memberController.getSignup);


// Member
router.post("/member/login", memberController.login);
router.post("/member/signup", memberController.signup);
router.post(
    "/member/logout",
    memberController.verifyAuth,
    memberController.logout
  );
  router.get(
    "/member/detail",
    memberController.verifyAuth,
    memberController.getMemberDetail
  );


// / Product */

 export default router;