import {winstonProcedure} from "~/server/api/trpc";
import {massiveObject} from "~/server/utils/utils";
import {winstonLoggingService} from "~/server/api/winston/winstonLoggingService";
import {asyncVanillaLoggingService} from "~/server/api/vanilla/vanillaLoggingService";

export const vanillaLoggingProcedure = winstonProcedure
    .mutation(async () => {
        console.info("Beginning Vanilla logging")

        console.debug("Vanilla Debug")
        console.info("Vanilla Info")
        console.warn("Vanilla Warn")
        console.error("Vanilla Error")


        console.info("Starting bulk log")
        for (let i = 0; i < 250; i++) {
            console.info(`Bulk log #${i}`, massiveObject)
        }
        console.info("Bulk log complete")


        console.info("Starting service log")
        winstonLoggingService()
        console.info("Service log complete")

        console.info("Starting async service log")
        await asyncVanillaLoggingService(0)
        console.info("Async Service log complete")

        console.info("Starting batch async service log")
        await Promise.all(new Array(20).fill(null).map((_, i) => asyncVanillaLoggingService(i)))
        console.info("Batch async Service log complete")


        console.info("Ending Vanilla logging")
    })

