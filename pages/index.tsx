import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-0 max-sm:p-12 max-sm:pt-0">

    <Image src={'/homeImg1.avif'} alt="hunting coder" width={128} height={108} className='rounded-[70px] mt-[15px]'/>
      <div className="flex w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex">
        <h1 className="font-bold text-[30px] w-full justify-center bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:from-inherit w-auto text-[2rem] ">
          Hunting Coder
        </h1>
      </div>
      <div className="flex flex-col gap-4 mt-[0px] w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex">
        <p className="w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-5 pt-5 backdrop-blur-2xl text-[1rem]      dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit w-auto rounded-xl border bg-gray-200 p-4 dark:bg-zinc-800/30 max-sm:p-3 max-sm:rounded-lg max-sm:text-[0.8rem]">
          A blog for hunting coders by a hunting coder
        </p>
      </div>
      <div className='mt-[40px] flex flex-col'>
        <h3 className='text-[2rem]'>Latest Blogs</h3>
        <div className='my-[10px] text-[0.9rem] flex flex-col items-start '> 
          <h2 className='font-bold text-[1.5rem]'>How to learn javascript in 2022?</h2>
          <p className='max-w-[500px]'> Javascript is the language used to design logic for the web. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem illo distinctio commodi illum voluptate cupiditate odit laboriosam deleniti? Rerum, dolor.</p>
          <button className='mt-[5px] px-[10px] py-[4px] border rounded-[5px] text-[12px] cursor-pointer hover:bg-gray-800'>Read More</button>
        </div>
        <div className='my-[10px] text-[0.9rem] flex flex-col items-start'> 
          <h2 className='font-bold text-[1.5rem]'>How to learn javascript in 2022?</h2>
          <p>Javascript is the language used to design logic for the web</p>
          <button className='mt-[5px] px-[10px] py-[4px] border rounded-[5px] text-[12px] cursor-pointer hover:bg-gray-800'>Read More</button>
        </div>
        <div className='my-[10px] text-[0.9rem] flex flex-col items-start'> 
          <h2 className='font-bold text-[1.5rem]'>How to learn javascript in 2022?</h2>
          <p>Javascript is the language used to design logic for the web</p>
          <button className='mt-[5px] px-[10px] py-[4px] border rounded-[5px] text-[12px] cursor-pointer hover:bg-gray-800'>Read More</button>
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
