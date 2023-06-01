import Header from '@/components/Header';
import Contacts from '@/components/Contacts';
import GithubStats from '@/components/GithubStats';
import ResumeButton from '@/components/ResumeButton';
import PostTemplate from '@/components/PostTemplate';


export default function Home() {
  return (
    <div className='flex justify-center items-center md:items-start p-2'>
      <div className='w-screen min-w-xs min-h-screen relative flex flex-col md:flex-row justify-center items-center md:items-start text-slate-200 gap-4 max-w-7xl'>
        <div className='flex flex-col gap-4 min-w-xs'>
          <Header/>
          <Contacts/>
          <GithubStats/>
          <ResumeButton/>
        </div>
        <div className='bg-slate-800 p-12 mt-0 md:mt-12 md:w-2/3 rounded-lg'>
          <PostTemplate/>
        </div>
      </div>
    </div>
  )
}
