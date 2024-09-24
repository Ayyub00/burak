
import { NextFunction, Request, Response } from "express";
import { T } from "../libs/types/common";
import  MemberService from "../models/Member.service";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { MemberType } from "../libs/enums/member.enum";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { ProductInput } from "../libs/types/product";


 const memberService = new MemberService();
 const restaurantController: T = {};

 restaurantController.goHome = async (
  req: AdminRequest,
  res: Response
) => {
  try {

    console.log("goHome");
    // LOGIC
    // SERVICE MODEL .....
    res.render("home"); 

     // send | json | redirect | end | render
  } catch (err) {
    console.log("Error, goHome:", err);
    res.redirect("/admin");
  }
};

restaurantController.goSignup = (req: Request, res: Response) => {
  try {
    console.log("goSingup");
    res.render("signup");
  } catch (err) {
    console.log("Error, Signup:", err);
  }
};

restaurantController.goLogin = (req: Request, res: Response) => {
  try {
    console.log("getLogin");
    res.render("login");
  } catch (err) {
    console.log("Error, getLogin:", err);
    res.redirect("/admin");
  }
};

restaurantController.processSignup = async (req: AdminRequest, res: Response) => {
  try {
    console.log("processSignup");

    const file = req.file;
    if (!file)
      throw new Errors(HttpCode.BAD_REQUEST, Message.SOMETHING_WENT_WRONG);

       const newMember: MemberInput = req.body;
       newMember.memberType = MemberType.RESTUARANT;
       newMember.memberImage = file?.path.replace(/\\/g, "/");
       const result = await memberService.processSignup(newMember);

       req.session.member = result;
       req.session.save(function () {
        res.redirect("/admin/product/all");
       });
  } catch (err) {
    console.log("Error, processSignup:", err);
    const message =
    err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
  res.send(
    `<script> alert("${message}"); window.location.replace('admin/signup') </script>`
  );
    res.send(err);
  }
};

restaurantController.processLogin = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("processLogin");
     const input: LoginInput = req.body;

     const memberService = new MemberService();
     const result = await memberService.processLogin(input);

     req.session.member = result;
     req.session.save(function () {
      res.redirect("/admin/product/all");
     });
  } catch (err) {
    console.log("Error, processSignup:", err);
       res.send(err);
       const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(
      (`<script> alert("${message}"); window.location.replace('admin/login') </script>`)
    );
  }
};

restaurantController.logout = async (req: AdminRequest, res: Response) => {
  try {
    console.log("logout");
    req.session.destroy(function () {
      res.redirect("/admin");
    });
  } catch (err) {
    console.log("Error, logout:", err);
    res.redirect("/admin");
  }
};

restaurantController.getUsers = async (req: Request, res: Response) => {
  try {
    console.log("getUsers");
    const result = await memberService.getUsers();
    res.render("users", { users: result });
  } catch (err) {
    console.log("Err getUsers:", err);
    res.redirect("/admin/login");
  }
};
restaurantController.updateChosenUser = async (req: Request, res: Response) => {
  try {
    console.log("updateChosenUser");
    const input = req.body;
    const result = await memberService.updateChosenUser(input);
    res.status(HttpCode.OK).json({ data: result });
  } catch (err) {
    console.log("Err updateChosenUser:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standart.code).json(Errors.standart);
  }
};

restaurantController.checkMe = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("checkAuthSession");
    if (req.session?.member)
      res.send(`<script> alert("${req.session.member.memberNick}") </script>`);
    else res.send(`<script> alert("${Message.NOT_AUTHENTICATED}") </script>`);
  } catch (err) {
    console.log("Error, checkAuthSession:", err);
    res.send(err);
  }
};

restaurantController.verifyRestaurant = (
  req: AdminRequest,
  res: Response,
  next: NextFunction
) => {
  if (req.session?.member?.memberType === MemberType.RESTUARANT) {
    req.member = req.session.member;
    next();
  } else {
    const message = Message.NOT_AUTHENTICATED;
    res.send(
      `<script> alert("${message}"); window.location.replace('/admin/login') </script>`
    );
  }
};


export default restaurantController;