import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const blog = () => {
  const [blogs, setblogs] = useState()
  useEffect(() => {
    // console.log('useEffect is running')
    fetch('http://localhost:3000/api/blogs').then((a)=>{
      return a.json();})
      .then((parsed)=>{
          // console.log(parsed);
          setblogs(parsed);
      })
  }, [])
  // console.log(blogs)
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
  
  // return (
  //   <div>
  //     <div className='mt-[40px] flex items-center flex-col'>
  //       <h3 className='text-[38px]'>Latest Blogs</h3>
        
  //       <div className='my-[20px] text-[16px]'> 
  //         <Link href={'/blogpost/How to learn javascript in 2022'} className='font-bold text-[28px]'>How to learn javascript in 2022?</Link>
  //         <p>Javascript is the language used to design logic for the web</p>
  //       </div>
  //       <div className='my-[20px] text-[16px]'> 
  //         <Link href={'/blogpost/How to learn javascript in 2022'} className='font-bold text-[28px]'>How to learn javascript in 2022?</Link>
  //         <p>Javascript is the language used to design logic for the web</p>
  //       </div>
  //     </div>
  //   </div>
  // )
}

export default blog
