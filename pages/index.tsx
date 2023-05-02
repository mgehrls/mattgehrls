import Image from 'next/image';

export default function Home() {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center bg-slate-800 text-slate-200 gap-8'>
      <div>
        <div className='flex gap-8'>
          <div className='rounded-full'>
            <Image className='rounded-full shadow-xl' alt='Matt Gehrls Headshot' src='/images/square_headshot.jpg' width={200} height={200} />
          </div>
          <div className='flex flex-col justify-center items-start'>         
            <h1 className='text-3xl font-bold tracking-wide'>Matt Gehrls</h1>
            <h3 className='text-md font-semibold tracking-normal pb-4'>Full Stack Software Development</h3>
            <a href='mailto:matt.gehrls@gmail.com'>✉ matt.gehrls@gmail</a>
            <p>📞 616-500-2366</p>
            <p className='text-xs pt-4'>* Portfolio Coming Soon</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-2 justify-center items-center p-4'>
        <Image width={615} height={600} alt="My github stats" src="https://github-readme-stats.vercel.app/api?username=mgehrls&show_icons=true&theme=dark" />
        <Image width={270} height={400} alt="My github stats" src="https://github-readme-stats.vercel.app/api/top-langs/?username=mgehrls&theme=radical" />
      </div>
      <div>
        <a download="mattgehrlsrésumé" href='/files/mattgehrlsrésumé.pdf' target='_blank' rel='noopener noreferrer'>⬇ Download My Résumé</a>
      </div>
    </div>
  )
}
