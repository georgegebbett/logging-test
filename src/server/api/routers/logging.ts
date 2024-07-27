import {createTRPCRouter, publicProcedure} from "~/server/api/trpc";
import {pinoLoggingProcedure} from "~/server/api/pino/pinoLoggingProcedure";
import {winstonLoggingProcedure} from "~/server/api/winston/winstonLoggingProcedure";
import {vanillaLoggingProcedure} from "~/server/api/vanilla/vanillaLoggingProcedure";

export const loggingRouter = createTRPCRouter({
    pino: pinoLoggingProcedure,
    winston: winstonLoggingProcedure,
    vanilla: vanillaLoggingProcedure,
    consoleInvestigation: publicProcedure.mutation(() => {
        console.log("Testing console.log");
        process.stdout.write("Testing process.stdout.write\n");
    })
})