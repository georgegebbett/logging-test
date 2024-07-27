// https://blog.logrocket.com/logging-with-pino-and-asynclocalstorage-in-node-js/

import {AsyncLocalStorage} from "async_hooks"
import type {TRPCError} from "@trpc/server"
import type {NextApiHandler} from "next"
import pino from "pino"
import {v4} from "uuid"


export type PinoLoggerContext = {
    logger: pino.Logger
    requestId: string
}

export const pinoLoggerContext = new AsyncLocalStorage<PinoLoggerContext>()

const tprcErrorSerialiser = (trpcError: TRPCError) => ({
    cause: trpcError.cause,
    code: trpcError.code,
    ...pino.stdSerializers.err(trpcError),
})

export const __pinoLogger = pino({
    level: process.env.NODE_ENV === "production" ? "info" : "debug",
    serializers: {
        err: tprcErrorSerialiser,
        error: tprcErrorSerialiser,
    },
    base: {
        env: process.env.NODE_ENV,
        revision: process.env.VERCEL_GITHUB_COMMIT_SHA ?? "unknown",
        logger: "pino"
    },
})

export const pinoLogger = new Proxy(__pinoLogger, {
    get(target, property, receiver) {
        target = pinoLoggerContext.getStore()?.logger || target
        return Reflect.get(target, property, receiver)
    },
})

export const withPinoRequestContext = (callback: NextApiHandler): NextApiHandler => {

    return (req, res) => {
        const requestId = req.headers['x-vercel-id'] as string ?? v4()
        const logger = __pinoLogger.child({requestId})
        const ctx = {requestId, logger}
        pinoLoggerContext.run(ctx, () => callback(req, res))
    }
}

export const getRequestId = () => pinoLoggerContext.getStore()?.requestId
