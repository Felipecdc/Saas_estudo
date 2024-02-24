import prismaClient from "../../prisma";

interface CheckSubscripiton {
    user_id: string
}

class CheckSubscriptonService {
    async execut({ user_id }: CheckSubscripiton){
        
        const status = await prismaClient.user.findFirst({
            where: {
                id: user_id
            },
            select: {
                subscriptions: {
                    select: {
                        id: true,
                        status: true
                    }
                }
            }
        })

        return { status }
    }
}

export { CheckSubscriptonService };