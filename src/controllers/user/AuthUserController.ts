import { Request, Response } from "express";
import { AuthUserService } from "../../services/user/AuthUserService";

class AuthUserController {
    async handle(req: Request, res: Response){

        try{
            const { email, password } = req.body;
            const authUserController = new AuthUserService();
            const session = await authUserController.execute({
                email,
                password
            })
            return res.json(session)
        }catch(err){
            console.log(err)
        }
    }
}

export { AuthUserController };