
import { Request, Response } from "express"
import { Get3LastMessagesSerice } from "../services/Get3LastMessagesService";

class Get3LastMessagesController {
    async handle(request: Request, response: Response) {
        
        const service = new Get3LastMessagesSerice()

        const result = await service.execute()

        return response.json(result)

    }
}

export { Get3LastMessagesController }