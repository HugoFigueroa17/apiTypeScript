
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

export default class FunctionsHelper{
    encryptPassword(string:string){
        const hash = bcrypt.hashSync(string, 10);
        return hash;
    }//encryptPassword

    generateAccessToken(datos:object){
        const jwtSecret: jwt.Secret = process.env['JWT_TOKEN_SECRET']?.trim() || '';
        return jwt.sign(datos, jwtSecret, { expiresIn: process.env['JWT_EXPIRES_IN'] });
    }//generateAccessToken
}
