import {winstonProcedure} from "~/server/api/trpc";
import {winstonLogger} from "~/server/loggers/winston/winston";
import {asyncWinstonLoggingService, winstonLoggingService} from "~/server/api/winston/winstonLoggingService";
import {massiveObject} from "~/server/utils/utils";

export const winstonLoggingProcedure = winstonProcedure
    .mutation(async () => {
        winstonLogger.info("Beginning Winston logging")

        winstonLogger.silly("Winston Silly")
        winstonLogger.debug("Winston Debug")
        winstonLogger.info("Winston Info")
        winstonLogger.warn("Winston Warn")
        winstonLogger.error("Winston Error")


        winstonLogger.info("Starting bulk log")
        for (let i = 0; i < 250; i++) {
            winstonLogger.info(`Bulk log #${i}`, massiveObject)
        }
        winstonLogger.info("Bulk log complete")


        winstonLogger.info("Starting service log")
        winstonLoggingService()
        winstonLogger.info("Service log complete")

        winstonLogger.info("Starting async service log")
        await asyncWinstonLoggingService(0)
        winstonLogger.info("Async Service log complete")

        winstonLogger.info("Starting batch async service log")
        await Promise.all(new Array(20).fill(null).map((_, i) => asyncWinstonLoggingService(i)))
        winstonLogger.info("Batch async Service log complete")


        winstonLogger.info("Ending Winston logging")
    })

