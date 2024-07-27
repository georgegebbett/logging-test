import {winstonLogger} from "~/server/loggers/winston/winston";

export const winstonLoggingService =  () => {
    winstonLogger.info("Beginning Winston Service logging")

    winstonLogger.silly("Winston Service Silly")
    winstonLogger.debug("Winston Service Debug")
    winstonLogger.info("Winston Service Info")
    winstonLogger.warn("Winston Service Warn")
    winstonLogger.error("Winston Service Error")


    winstonLogger.info("Starting bulk service log")
    for (let i = 0; i < 250; i++) {
        winstonLogger.info(`Bulk service log #${i}`)
    }
    winstonLogger.info("Bulk service log complete")


    winstonLogger.info("Ending Winston Service logging")
}

export const asyncWinstonLoggingService = async (n: number) => {
    winstonLogger.info(`Beginning Winston Async Service logging #${n}`)

    await new Promise(resolve => setTimeout(resolve, 500))

    winstonLogger.info(`Ending Winston Async Service logging #${n}`)

}
