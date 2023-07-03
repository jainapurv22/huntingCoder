// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/getBlogs?slug=how-to-learn-javascript
// import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from 'fs'

// type Data = {
//   name: string
// }

export default function handler(
  req,
  res
) {
  fs.readFile(`blogdata/${req.query.slug}.json`,'utf-8',(err,data)=>{
    if(err)
    {
        res.status(500).json({error:"Internal servor error"})
    }
    // console.log(req.query.slug)
    res.status(200).json(JSON.parse(data))
  })
}
