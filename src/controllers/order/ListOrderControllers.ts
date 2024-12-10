import { Request, Response } from "express";
import { ListOrderService } from "../../services/order/ListOrderService";

class ListOrderControllers {
    async handle(req: Request, res: Response){
        const listOrderService = new ListOrderService();

        const orders = await listOrderService.execute();

        res.json(orders);

    }
}

export { ListOrderControllers }