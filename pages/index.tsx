import Header from '@/components/Header';
import Contacts from '@/components/Contacts';
import GithubStats from '@/components/GithubStats';
import ResumeButton from '@/components/ResumeButton';


export default function Home() {
  return (
    <div className='flex justify-center items-start p-2'>
      <div className='w-screen min-w-xs min-h-screen relative flex flex-col justify-center items-center text-slate-200 gap-4 max-w-4xl'>
        <Header/>
        <Contacts/>
        <GithubStats/>
        <ResumeButton/>
      </div>
    </div>
  )
}
