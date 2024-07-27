import {pinoProcedure} from "~/server/api/trpc";
import {pinoLogger} from "~/server/loggers/pino/pino";
import {asyncPinoLoggingService, pinoLoggingService} from "~/server/api/pino/pinoLoggingService";
import {massiveObject} from "~/server/utils/utils";

export const pinoLoggingProcedure = pinoProcedure
    .mutation(async () => {
        pinoLogger.info("Beginning Pino logging")

        pinoLogger.trace("Pino Trace")
        pinoLogger.debug("Pino Debug")
        pinoLogger.info("Pino Info")
        pinoLogger.warn("Pino Warn")
        pinoLogger.error("Pino Error")
        pinoLogger.fatal("Pino Fatal")


        pinoLogger.info("Starting bulk log")
        for (let i = 0; i < 250; i++) {
            pinoLogger.info(massiveObject, `Bulk log #${i}`)
        }
        pinoLogger.info("Bulk log complete")


        pinoLogger.info("Starting service log")
        pinoLoggingService()
        pinoLogger.info("Service log complete")

        pinoLogger.info("Starting async service log")
        await asyncPinoLoggingService(0)
        pinoLogger.info("Async Service log complete")

        pinoLogger.info("Starting batch async service log")
        await Promise.all(new Array(20).fill(null).map((_, i) => asyncPinoLoggingService(i)))
        pinoLogger.info("Batch async Service log complete")


        pinoLogger.info("Ending Pino logging")
    })

