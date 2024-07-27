import Head from "next/head";

import {api} from "~/utils/api";

export default function Home() {
    const {mutate: pino} = api.logging.pino.useMutation();
    const {mutate: winston} = api.logging.winston.useMutation();
    const {mutate: vanilla} = api.logging.vanilla.useMutation();

    return (
        <>
            <Head>
                <title>Create Logging App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main
                className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
                <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
                    <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
                        Create <span className="text-[hsl(280,100%,70%)]">LOGGING</span> App
                    </h1>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">

                        <div className="text-lg">
                            No DB, no auth, just loggers aplenty
                        </div>
                    </div>
                    <button onClick={() => pino()} type="button" className="bg-blue-500 py-2 px-4">Pino</button>
                    <button onClick={() => winston()} type="button" className="bg-blue-500 py-2 px-4">Winston</button>
                    <button onClick={() => vanilla()} type="button" className="bg-blue-500 py-2 px-4">Vanilla</button>
                </div>
            </main>
        </>
    );
}
