import type {NextApiRequest, NextApiResponse} from 'next'
import {pinoLogger, withPinoRequestContext} from "~/server/loggers/pino/pino";

type ResponseData = {
    message: string
}

function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    pinoLogger.info("Hello from pino in the API route")

    for (let i = 0; i < 250; i++) {

        pinoLogger.info(`Pino - ${i}`)
    }


    res.status(200).json({message: 'Hello from Next.js!'})
}


const f = withPinoRequestContext(handler)

export default f