import {createTRPCRouter} from "~/server/api/trpc";
import {pinoLoggingProcedure} from "~/server/api/pino/pinoLoggingProcedure";
import {winstonLoggingProcedure} from "~/server/api/winston/winstonLoggingProcedure";
import {vanillaLoggingProcedure} from "~/server/api/vanilla/vanillaLoggingProcedure";

export const loggingRouter = createTRPCRouter({
    pino: pinoLoggingProcedure,
    winston: winstonLoggingProcedure,
    vanilla: vanillaLoggingProcedure
})