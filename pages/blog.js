import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import * as fs from 'fs'

const Blog = (props) => {
  const [blogs, setblogs] = useState(props.allBlogs)
  // useEffect(() => {
    
  // }, [])
  return <div className='mt-[40px] flex items-center flex-col'>
    <h3 className='text-[38px]'>Latest Blogs</h3>
    {
    blogs?.map((blogitem,i)=>{
      return(
        <div key={i} className='my-[20px] px-[22rem] text-[16px] flex items-center flex-col'> 
          <Link href={`/blogpost/${blogitem.slug}`} className='font-bold text-[28px]'>{blogitem.title}</Link>
          <p>{blogitem.description.substr(0,140)}...</p>
        </div>
      )
    })
  }
  </div>
}

export async function getStaticProps() {
  let data = await fs.promises.readdir('blogdata');
  let allBlogs=[],myfile
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile(('blogdata/'+item),'utf-8');
    allBlogs.push(JSON.parse(myfile));
  }
  console.log(allBlogs)
  return {
    props: {allBlogs},
  }
}

export default Blog
