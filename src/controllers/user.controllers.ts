import { Request, Response } from "express";
import { User } from "../entities/User";
import { sha256 } from "js-sha256";

export const createUser = async (req: Request,res: Response) =>{
    try {
        const { username , password } =  req.body;

        if (typeof(username) != 'string' || 
            typeof(password) != 'string' ||
            !req.body.hasOwnProperty('username')           ||
            !req.body.hasOwnProperty('password')){
            return res.status(400).json({
                status:400, 
                message: "En el objeto no está las keys username o password, o el tipo username o password no son string"
            })
        }

        const user = new User();
        user.username = username;
        let hash = sha256(password);
        user.password = String(hash);

        await user.save()

        return res.status(200).json({
            status: 200, 
            message: "El usuario se creó correctamente"
        })

    } catch(error){
        if (error instanceof Error){
            return res.status(500).json({message: error.message});
        }
    }
};