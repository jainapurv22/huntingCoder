import React, { useEffect, useState } from 'react'
import Router, { useRouter } from 'next/router'
import * as fs from 'fs' 

const Slug = (props) => {
  const [blog, setBlog] = useState(props.blogitem);
  return (
    <div className='flex items-center flex-col'>
      <h2 className='text-[25px] max-sm:text-[20px] mb-[15px] font-bold'>{blog&&blog.title}</h2>
      <p className='px-[24rem] max-sm:px-[4rem] max-sm:text-[15px]'>{blog&&blog.description}</p>
    </div>
  )
}

export const getStaticPaths = async () => {

  let allblogs = await fs.promises.readdir(`blogdata/`);
  let allb = allblogs.map((item)=>{
    return { params: { slug: item.split('.')[0]}};
  })
  return {
    paths: allb,
    fallback: true, // false or "blocking"
  }
}

export async function getStaticProps(context) {

    let {slug} = context.params;
    console.log(slug);
    let blogitem = await fs.promises.readFile(`blogdata/${slug}.json`,'utf-8');
  
    return {
    props: {blogitem:JSON.parse(blogitem)},
  }
}

export default Slug
