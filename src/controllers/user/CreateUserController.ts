import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {
    async handle(req: Request, res: Response){

        const { name, email, password } = req.body;

        try{
            const createUserController = new CreateUserService();
            const user = await createUserController.execute({
                name,
                email,
                password
            })
            return res.json(user)
        }catch(err){
            console.log("ERROR:", err)
        }

    }
}

export { CreateUserController };