import Header from '@/components/Header';
import Contacts from '@/components/Contacts';
import GithubStats from '@/components/GithubStats';
import ResumeButton from '@/components/ResumeButton';
import PostTemplate from '@/components/PostTemplate';
import { useState } from 'react';




export default function Home() {
  
  const [page, setPage] = useState("about");

  const Sections = () => {
    switch (page) {
     case "blog": return (
      <div>
       <h1 className='pt-4 pl-4 text-3xl font-bold'>Blog</h1>
       <div className='px-4'>
       <PostTemplate/>
       </div>
       <div className='p-6'>
       <PostTemplate/>
       </div>
       <div className='p-6'>
       <PostTemplate/>
       </div>
       <div className='p-6'>
       <PostTemplate/>
       </div>
      </div>
     )
     break;
     case "portfolio": return (
     <div className='p-4'>
       <h1>Portfolio coming soon.</h1>
      </div>

      )
     break;
     case "contact": return (
      <div><h1>Contact Form coming soon.</h1></div>
     )
     break;
     default: return (
     <div className='md:px-4 flex flex-col gap-4'>
      <h1 className='pt-4 text-3xl font-bold'>About Matt Gehrls</h1>
      <p>{"I'm new to tech and all of my work is a work in progress. I spent the last year learning full-time once I trained my replacement in Summer 2022 after nearly a decade in Real Estate. I understand the importance of working as a team so while I focused on Frontend development, I have built normalized relational databases with working authentication using a few different services, and have a moderate understanding of design principles and how to use Figma/Illustrator. I started with mostly functional programming, but I've written apps in OOP. I'd like to think my knowledge base is deep enough to excel in frontend, but wide enough to understand and utilize the full stack."}</p>
      <p>{"Self study is only interesting for so long. I need to start working with others and growing in ways I can't expect. So if you are reading this site, I hope you understand that I know this isn't a finished product. I just started advertising my work to force myself to finish projects, and this is a first step."}</p>
      <p>{"I'm winging this process and hoping that transparency gets me a point or two. Follow along with my progress by checking out "}<a className='underline' href="https://github.com/mgehrls">my github account!</a></p>
    </div>)
    }
  }

  return (
    <div className='flex flex-col order-1 max-h-screen h-screen w-screen text-slate-200'>        
        <Header/>
          <div className='flex order-3 h-10 w-full items-center justify-between p-4'>
            <button className={page === "about" ? 'w-1/4 bg-slate100 text-slate-800': "w-1/4"} onClick={()=>setPage("about")}>About</button>
            <button className={page === "blog" ? 'w-1/4 bg-slate100 text-slate-800': "w-1/4"} onClick={()=>setPage("blog")}>Blog</button>
            <button className={page === "portfolio" ? 'w-1/4 bg-slate100 text-slate-800': "w-1/4"} onClick={()=>setPage("portfolio")}>Portfolio</button>
            <button className={page === "contact" ? 'w-1/4 bg-slate100 text-slate-800': "w-1/4"} onClick={()=>setPage("contact")}>Contact</button>
          </div>
          <div className='flex-1 order-2 h-full overflow-y-scroll p-4'>
            <Sections/>
          </div>
    </div>
  )
}
