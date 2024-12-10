import { Request, Response } from "express";
import { FinalOrderService } from "../../services/order/FinalOrderService";

class FinalOrderControllers {
    async handle(req: Request, res: Response){
        const { order_id } = req.body;

        const finalOrderControllers = new FinalOrderService();

        const order = await finalOrderControllers.execute({
            order_id,
        })

        res.json(order)

    }
}

export { FinalOrderControllers }