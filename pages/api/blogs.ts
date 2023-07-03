// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from 'fs'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string[]>
) {
  fs.readdir(`blogdata`,'utf-8',(err,data)=>{
    if(err)
    {
        res.status(500).json(JSON.parse(JSON.stringify({error:"Internal servor error"})))
    }
    console.log(data)
    res.status(200).json(data)
  })
}
