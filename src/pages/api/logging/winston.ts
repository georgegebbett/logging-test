import type {NextApiRequest, NextApiResponse} from 'next'
import {winstonLogger, withWinstonRequestContext} from "~/server/loggers/winston/winston";

type ResponseData = {
    message: string
}

function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {

    winstonLogger.info("Hello from Winston in the API route")
    for (let i = 0; i < 250; i++) {

        winstonLogger.info(`Winston - ${i}`)
    }


    res.status(200).json({message: 'Hello from Next.js!'})
}


const f = withWinstonRequestContext(handler)

export default f