import Image from 'next/image';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';

function Email(){
  return (
    <a className='p-2 text-lg flex items-center gap-3' href='mailto:matt.gehrls@gmail.com'>
      <div className='flex justify-center items-center'>
        <AiOutlineMail className='text-2xl' />
      </div>
    </a>
  )
}
function Phone(){
  return (
    <a className='p-2 text-lg flex items-center gap-3' href='tel:16165002366'>
      <div className='flex justify-center items-center'>
        <AiOutlinePhone className='text-2xl' />
      </div>
    </a>
  )
}
function LinkedIn(){
  return (
    <a className='p-2 text-lg flex items-center gap-3' target='_blank' href='https://www.linkedin.com/in/mattgehrls'>
      <div className='flex justify-center items-center'>
        <AiOutlineLinkedin className='text-2xl' />
      </div>
    </a>
  )
}
function Github(){
  return (
    <a className='p-2 text-lg flex items-center gap-3' target='_blank' href='https://github.com/mgehrls'>
      <div className='flex justify-center items-center'>
        <AiOutlineGithub className='text-2xl' />
      </div>
    </a>
  )
}

export default function Home() {
  return (
    <div className='flex justify-center items-start  bg-slate-900'>
      <div className='w-screen min-h-screen relative flex flex-col justify-center items-center text-slate-200 gap-4 max-w-4xl'>
        <div>
          <div className='flex w-full max-w-sm gap-8 mt-20'>
            <div className='rounded-full'>
              <Image className='rounded-full shadow-xl' alt='Matt Gehrls Headshot' src='/images/square_headshot.jpg' width={200} height={200} />
            </div>
            <div className='flex flex-col justify-center items-start'>         
              <h1 className='text-2xl md:text-3xl font-bold tracking-wide'>Matt Gehrls</h1>
              <h3 className='text-md md:text-md font-semibold tracking-normal pb-4'>Full Stack Software Development</h3>
              <p className='text-md pt-4'> ⚠ Work in Progress ⚠</p>
            </div>
          </div>
        </div>
        <div className='w-full max-w-xs mt-2'>
          <hr className='border-white w-full max-w-xs'/>
          <div className='flex w-full max-w-xs justify-between'>
                  <Email />
                  <Phone />
                  <LinkedIn />
                  <Github />
          </div>
          <hr className='border-white w-full max-w-xs'/>
        </div>
        <div className='flex flex-col gap-2 justify-center items-center p-4'>
          <Image width={384} height={600} alt="My github stats" src="https://github-readme-stats.vercel.app/api?username=mgehrls&show_icons=true&theme=dark&hide_rank=true" />
          <Image width={384} height={400} alt="My most used programming languages" src="https://github-readme-stats.vercel.app/api/top-langs/?username=mgehrls&theme=dark" />
        </div>
        <div className='mb-20'>
          <a className='bg-slate-300 text-slate-900 hover:bg-slate-700 hover:text-slate-100 hover:scale-110 px-4 py-2 rounded-md' download="mattgehrlsrésumé" href='/files/mattgehrlsrésumé.pdf' target='_blank' rel='noopener noreferrer'>⬇ Download My Résumé</a>
        </div>
      </div>
    </div>
  )
}
