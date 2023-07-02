import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='my-[40px]'>
        <ul className="flex justify-center">
          <li className='mx-[15px]'>
            <Link href={'/'}>Home</Link>
          </li>
          <li className='mx-[15px]'>
            <Link href={'/about'}>About</Link>
          </li>
          <li className='mx-[15px]'>
            <Link href={'/blog'}>Blog</Link>
          </li>
          <li className='mx-[15px]'>
            <Link href={'/contact'}>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar