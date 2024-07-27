import type {NextApiRequest, NextApiResponse} from 'next'

type ResponseData = {
    message: string
}

function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {

    console.info("Hello from Vanilla logger in the API route")
    for (let i = 0; i < 250; i++) {

        console.info(`Vanilla - ${i}`)
    }


    res.status(200).json({message: 'Hello from Next.js!'})
}


export default handler