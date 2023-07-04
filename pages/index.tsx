import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-0">
      <div className="z-10 flex w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex">
        <h1 className="fixed left-0 top-0 font-bold text-[30px] w-full justify-center  bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:from-inherit lg:static lg:w-auto   lg:p-4 ">
          Hunting Coder
        </h1>
        
      </div>
      {/* <Image alt='' src={'/homeImg1.avif'} width={148} height={128} className='rounded-lg mt-[15px]'></Image> */}
      <img src={'/homeImg1.avif'} alt="hunting coder" width={148} height={128} className='rounded-lg mt-[15px]'/>
      <div className="z-10 flex mt-[40px] w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0  w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          A blog for hunting coders by a hunting coder
        </p>
      </div>
      <div className='mt-[40px]'>
        <h3 className='text-[38px]'>Latest Blogs</h3>
        <div className='my-[20px] text-[16px]'> 
          <h2 className='font-bold text-[28px]'>How to learn javascript in 2022?</h2>
          <p>Javascript is the language used to design logic for the web</p>
        </div>
        <div className='my-[20px] text-[16px]'> 
          <h2 className='font-bold text-[28px]'>How to learn javascript in 2022?</h2>
          <p>Javascript is the language used to design logic for the web</p>
        </div>
        <div className='my-[20px] text-[16px]'> 
          <h2 className='font-bold text-[28px]'>How to learn javascript in 2022?</h2>
          <p>Javascript is the language used to design logic for the web</p>
        </div>
      </div>

      {/* <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            Discover and deploy boilerplate example Next.js&nbsp;projects.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  )
}
