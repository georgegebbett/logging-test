export const vanillaLoggingService = () => {
    console.info("Beginning Vanilla Service logging")

    console.debug("Vanilla Service Debug")
    console.info("Vanilla Service Info")
    console.warn("Vanilla Service Warn")
    console.error("Vanilla Service Error")


    console.info("Starting bulk service log")
    for (let i = 0; i < 250; i++) {
        console.info(`Bulk service log #${i}`)
    }
    console.info("Bulk service log complete")


    console.info("Ending Vanilla Service logging")
}

export const asyncVanillaLoggingService = async (n: number) => {
    console.info(`Beginning Vanilla Async Service logging #${n}`)

    await new Promise(resolve => setTimeout(resolve, 500))

    console.info(`Ending Vanilla Async Service logging #${n}`)

}
