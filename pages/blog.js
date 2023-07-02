import Link from 'next/link'
import React from 'react'

const blog = () => {
  return (
    <div>
      <div className='mt-[40px] flex items-center flex-col'>
        <h3 className='text-[38px]'>Latest Blogs</h3>
        <div className='my-[20px] text-[16px]'> 
          <Link href={'/blogpost//How to learn javascript in 2022'} className='font-bold text-[28px]'>How to learn javascript in 2022?</Link>
          <p>Javascript is the language used to design logic for the web</p>
        </div>
        <div className='my-[20px] text-[16px]'> 
          <Link href={'/blogpost//How to learn javascript in 2022'} className='font-bold text-[28px]'>How to learn javascript in 2022?</Link>
          <p>Javascript is the language used to design logic for the web</p>
        </div>
        <div className='my-[20px] text-[16px]'> 
          <Link href={'/blogpost//How to learn javascript in 2022'} className='font-bold text-[28px]'>How to learn javascript in 2022?</Link>
          <p>Javascript is the language used to design logic for the web</p>
        </div>
      </div>
    </div>
  )
}

export default blog
