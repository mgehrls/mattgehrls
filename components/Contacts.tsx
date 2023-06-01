import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';

const anchorClasses = 'p-2 text-lg flex items-center gap-3 hover:scale-125 transform transition-all duration-300 ease-in-out'

function Email(){
  return (
    <a className={anchorClasses} href='mailto:matt.gehrls@gmail.com'>
      <div className='flex justify-center items-center'>
        <AiOutlineMail className='text-2xl' />
      </div>
    </a>
  )
}
function Phone(){
  return (
    <a className={anchorClasses} href='tel:16165002366'>
      <div className='flex justify-center items-center'>
        <AiOutlinePhone className='text-2xl' />
      </div>
    </a>
  )
}
function LinkedIn(){
  return (
    <a className={anchorClasses} target='_blank' href='https://www.linkedin.com/in/mattgehrls'>
      <div className='flex justify-center items-center'>
        <AiOutlineLinkedin className='text-2xl' />
      </div>
    </a>
  )
}
function Github(){
  return (
    <a className={anchorClasses} target='_blank' href='https://github.com/mgehrls'>
      <div className='flex justify-center items-center'>
        <AiOutlineGithub className='text-2xl' />
      </div>
    </a>
  )
}


const Contacts = () => {
  return (
    <div className='w-full max-w-sm mt-2 flex flex-col justify-center items-center'>
    <hr className='border-white w-full max-w-sm'/>
    <div className='flex w-full max-w-xs justify-between'>
            <Email />
            <Phone />
            <LinkedIn />
            <Github />
    </div>
    <hr className='border-white w-full max-w-sm'/>
  </div>
  );
};

export default Contacts;