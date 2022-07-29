import { Request, Response } from "express";
import { EmpleadoEntity } from "../entities/empleado.entity";
import bcrypt from 'bcryptjs';
import FunctionsHelper from "../helpers/functions.helper";

export class AuthController {

    index(req: Request, res:Response){
          return res.status(200).json({message: "Api is running...!!"});
    }//index

    async auth(req: Request, res:Response){
        const {username,password} = req.body;
    
        if(username && password){
            const user = await EmpleadoEntity.findOneBy({ username: username.trim()});
            if (!user) {
                return res.status(404).json({ success:0, message: "Username not found" });
            }
            else
            {
                if(user.status === 1){
                    const isCorrectPassword = bcrypt.compareSync(password, user?.password?.toString() || '');
                    user.password = '';

                    if(isCorrectPassword){
                        const token = new FunctionsHelper().generateAccessToken({user})

                        return res.status(200).json({
                            success: 1,
                            message: "Login successfully",
                            token: token
                        });
                    }
                    else
                    {
                        return res.status(500).json({ success: 0, message: "Sorry your password is incorrect!" });
                    }

                }
                else
                {
                    return res.status(500).json({ success: 0, message: "Sorry your account is inactive!" });

                }
            }
        }
        else
        {
            return res.status(500).json({ success: 0, message: "Username and password are required!" });
        }
    }//auth
}//AuthController