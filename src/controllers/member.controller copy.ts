

import { Request, Response } from "express";
import { LoginInput, Member, MemberInput } from '../libs/types/member';
 import { T } from "../libs/types/common";
 import { MemberType } from '../libs/enums/member.enum';
 import MemberService from '../models/Member.service';
 import Errors from '../libs/Errors';

 const  memberService = new MemberService();

// REACT loyixa uchun ya'ni single page application uchun 

 const memberController: T = {};

 memberController.signup = async (req: Request, res: Response) => {
     try {
       console.log("signup");
       const input: MemberInput = req.body,
       result: Member = await memberService.signup(input);

   //TODO:TOKENS AUTHENTICATION

       res.json({member:result});
     } catch (err) {
       console.log("Error, signup:", err);
       if(err instanceof Errors) res.status (err.code).json(err);
       else res.status(Errors.standard.code).json (Errors.standard);
      // res.json({});
     }
   };

   memberController.login = async (req: Request, res: Response) => {
     try {
       console.log("login");
       const input: MemberInput = req.body,
       result = await memberService.login(input);

   //TODO:TOKENS AUTHENTICATION

       res.json({member:result});
     } catch (err) {
       console.log("Error, login:", err);
       if(err instanceof Errors) res.status (err.code).json(err);
       else res.status(Errors.standard.code).json (Errors.standard);
      // res.json({});
     }
 };

   export default memberController;