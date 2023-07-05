import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='py-[40px]'>
        <ul className="flex justify-center list-none">
          <li className='mx-[15px] max-sm:mx-[12px]'>
            <Link href={'/'}>Home</Link>
          </li>
          <li className='mx-[15px] max-sm:mx-[12px]'>
            <Link href={'/about'}>About</Link>
          </li>
          <li className='mx-[15px] max-sm:mx-[12px]'>
            <Link href={'/blog'}>Blog</Link>
          </li>
          <li className='mx-[15px] max-sm:mx-[12px]'>
            <Link href={'/contact'}>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
