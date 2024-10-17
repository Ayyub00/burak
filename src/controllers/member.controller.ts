

import { Request, Response } from "express";
import { LoginInput, Member, MemberInput } from '../libs/types/member';
 import { T } from "../libs/types/common";
 import { MemberType } from '../libs/enums/member.enum';
 import MemberService from '../models/Member.service';
 import Errors from '../libs/Errors';
 import AuthService from "../models/Auth.service";
import { token } from "morgan";

 const  memberService = new MemberService();
 const authService = new AuthService();

// REACT loyixa uchun ya'ni single page application uchun 

 const memberController: T = {};

 memberController.signup = async (req: Request, res: Response) => {
     try {
       console.log("signup");
       const input: MemberInput = req.body,
       result: Member = await memberService.signup(input);

   //TODO:TOKENS AUTHENTICATION
   const token = await authService.createToken(result);
   

       res.json({member:result});
     } catch (err) {
       console.log("Error, signup:", err);
       if(err instanceof Errors) res.status (err.code).json(err);
       else res.status(Errors.standart.code).json (Errors.standart);
      // res.json({});
     }
   };

   memberController.login = async (req: Request, res: Response) => {
     try {
       console.log("login");
       const input: MemberInput = req.body,
       result = await memberService.login(input),
      token = await authService.createToken(result);
    console.log("token", token);

    
    // res.cookie("accessToken", )

       res.json({member:result});
     } catch (err) {
       console.log("Error, login:", err);
       if(err instanceof Errors) res.status (err.code).json(err);
       else res.status(Errors.standart.code).json (Errors.standart);
      // res.json({});
     }
 };

   export default memberController;