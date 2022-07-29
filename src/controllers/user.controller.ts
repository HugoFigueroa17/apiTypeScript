import { Request, Response } from "express";
import { EmpleadoEntity } from "../entities/empleado.entity";

export class UserController {

    async getAllUsers(req: Request, res:Response){
        
        const users = await EmpleadoEntity.find();
        if (users.length > 0) {
            return res.status(200).json({ success:1, users: users });
        }
        else
        {
            return res.status(500).json({ success:0, message: "Users list is empty" });
        }
    }//getAllUsers

    async getUserByID(req:Request, res:Response){
        const id: number = isNaN(parseInt(req.params.id)) ? 0 : parseInt(req.params.id);
        const user = await EmpleadoEntity.findOneBy({ id: id });
        
        console.log(id)
        if(user){
            return res.status(200).json({ success:1, user: user });
        }
        else
        {
            return res.status(500).json({ success:0, message: "User not found!" });
        }
    }//getUserByID

}//UserController