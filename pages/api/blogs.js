// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from 'fs'

// type Data = {
//   name: string
// }

export default async function handler(
  req,
  res
) {
  let data = await fs.promises.readdir('blogdata');
  let allBlogs=[],myfile
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile(('blogdata/'+item),'utf-8');
    allBlogs.push(JSON.parse(myfile));
  }
  res.status(200).json(allBlogs);
  // fs.readdir(`blogdata`,'utf-8',(err,data)=>{
  //   if(err)
  //   {
  //       res.status(500).json(JSON.parse(JSON.stringify({error:"Internal servor error"})))
  //   }
  //   console.log(data)
  //   res.status(200).json(data)
  // })
}
