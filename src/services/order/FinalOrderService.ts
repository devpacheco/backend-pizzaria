import prismaClient from "../../prisma";

interface FinalRequest {
    order_id: string;
}

class FinalOrderService {
    async execute({ order_id }: FinalRequest){

        const order = await prismaClient.order.update({
            where:{
                id: order_id
            },
            data:{
                status: true,
            }
        })

        return order;

    }
}

export { FinalOrderService }