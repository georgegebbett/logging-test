import {createTRPCRouter} from "~/server/api/trpc";
import {pinoLoggingProcedure} from "~/server/api/pino/pinoLoggingProcedure";
import {winstonLoggingProcedure} from "~/server/api/winston/winstonLoggingProcedure";

export const loggingRouter = createTRPCRouter({
    pino: pinoLoggingProcedure,
    winston: winstonLoggingProcedure
})