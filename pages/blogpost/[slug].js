import React, { useEffect, useState } from 'react'
import Router, { useRouter } from 'next/router'

const Slug = (props) => {
  const [blog, setBlog] = useState(props.blogitem);
  
  return (
    <div className='flex items-center flex-col'>
      <h2 className='text-[25px] mb-[15px] font-bold'>{blog&&blog.title}</h2>
      <p className='px-[24rem]'>{blog&&blog.description}</p>
    </div>
  )
}

export async function getServerSideProps(context) {
    
    const {slug} = context.query;
    let data = await fetch(`http://localhost:3000/api/getBlog?slug=${slug}`)
    let blogitem = await data.json();

  return {
    props: {blogitem},
  }
}

export default Slug
