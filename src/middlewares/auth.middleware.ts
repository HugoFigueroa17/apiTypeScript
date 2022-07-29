import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

export class AuthMiddleware{

  index(req: Request, res: Response, next: NextFunction){
    next();
  }
  
  async validateJWT(req: Request, res: Response, next: NextFunction){
    let token = req.get("authorization"); 
    if (token) {
      console.log(token);
      
      // Remove Bearer from string
      token = token.slice(7);
      const jwtSecret: jwt.Secret = process.env['JWT_TOKEN_SECRET']?.trim() || '';
    
    
      jwt.verify(token,jwtSecret, (err, decoded) => {
        if (err) {
          console.log(err)
          return res.json({
            success: 0,
            message: "Invalid Token..."
          });
        } else {
          //req.decoded = decoded;
          next();
        }
      });
    } else {
      return res.json({
        success: 0,
        message: "Access Denied! Unauthorized User"
      });
    }
  }//updateUser
}