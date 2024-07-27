// https://blog.logrocket.com/logging-with-pino-and-asynclocalstorage-in-node-js/

import {AsyncLocalStorage} from "async_hooks"
import type {TRPCError} from "@trpc/server"
import type {NextApiHandler, NextApiRequest, NextApiResponse} from "next"
import pino from "pino"
import {v4} from "uuid"
import winston from "winston";


export type WinstonLoggerContext = {
    logger: winston.Logger
    requestId: string
}

export const winstonLoggerContext = new AsyncLocalStorage<WinstonLoggerContext>()

const tprcErrorSerialiser = (trpcError: TRPCError) => ({
    cause: trpcError.cause,
    code: trpcError.code,
    ...pino.stdSerializers.err(trpcError),
})

export const __winstonLogger = winston.createLogger({
    level: process.env.NODE_ENV === "production" ? "info" : "debug",
    // serializers: {
    //   err: tprcErrorSerialiser,
    //   error: tprcErrorSerialiser,
    // },
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
    ),
    defaultMeta: {
        env: process.env.NODE_ENV,
        revision: process.env.VERCEL_GITHUB_COMMIT_SHA ?? "unknown",
        logger: 'winston'
    },
    transports: [new winston.transports.Console()]
})

export const winstonLogger = new Proxy(__winstonLogger, {
    get(target, property, receiver) {
        target = winstonLoggerContext.getStore()?.logger || target
        return Reflect.get(target, property, receiver)
    },
})

export const withWinstonRequestContext = (callback: NextApiHandler): NextApiHandler => {
    return (req: NextApiRequest, res: NextApiResponse) => {
        const vercelRequestId = req.headers['x-vercel-id'] as string || v4()
        const logger = __winstonLogger.child({requestId: vercelRequestId})
        const ctx = {requestId: vercelRequestId, logger}

        winstonLoggerContext.run(ctx, () => callback(req, res))
    }
}

export const getRequestId = () => winstonLoggerContext.getStore()?.requestId
