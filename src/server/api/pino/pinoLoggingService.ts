import {pinoLogger} from "~/server/loggers/pino/pino";

export const pinoLoggingService =  () => {
    pinoLogger.info("Beginning Pino Service logging")

    pinoLogger.trace("Pino Service Trace")
    pinoLogger.debug("Pino Service Debug")
    pinoLogger.info("Pino Service Info")
    pinoLogger.warn("Pino Service Warn")
    pinoLogger.error("Pino Service Error")
    pinoLogger.fatal("Pino Service Fatal")


    pinoLogger.info("Starting bulk service log")
    for (let i = 0; i < 250; i++) {
        pinoLogger.info(`Bulk service log #${i}`)
    }
    pinoLogger.info("Bulk service log complete")


    pinoLogger.info("Ending Pino Service logging")
}

export const asyncPinoLoggingService = async (n: number) => {
    pinoLogger.info(`Beginning Pino Async Service logging #${n}`)

    await new Promise(resolve => setTimeout(resolve, 500))

    pinoLogger.info(`Ending Pino Async Service logging #${n}`)

}
