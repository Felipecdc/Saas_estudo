import { Request, Response } from "express";
import { CheckSubscriptonService } from "../../services/haircut/CheckSubscriptonService";

class CheckSubscriptonController {
    async handle(req:Request, res:Response){

        const user_id = req.user_id

        const checkSubscripton = new CheckSubscriptonService();

        const status = await checkSubscripton.execut({ user_id })

        return res.json( status )
    }
}

export { CheckSubscriptonController };