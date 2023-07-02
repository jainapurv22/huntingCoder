import React from 'react'
import Router, { useRouter } from 'next/router'

const Slug = () => {
  const router=useRouter();
  const {slug} = router.query;
  return (
    <div className='flex items-center flex-col'>
      <h2 className='text-[25px] mb-[15px] font-bold'>Title of the blogpost is {slug}</h2>
      <p className='px-[24rem]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore architecto culpa quas placeat ut possimus sed nostrum quisquam, quod nemo, blanditiis reiciendis, doloribus porro! Maiores.</p>
    </div>
  )
}

export default Slug
