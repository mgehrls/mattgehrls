import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';

const anchorClasses = 'p-2 text-lg flex items-center gap-3 hover:scale-125 transform transition-all duration-300 ease-in-out'
const divClasses = 'flex gap-2 justify-center items-center text-sm'
function Email(){
  return (
    <a className={anchorClasses} href='mailto:matt.gehrls@gmail.com'>
      <div className={divClasses}>
        <AiOutlineMail className='text-2xl' />
        <p>mattgehrls@gmail.com</p>
      </div>
    </a>
  )
}
function Phone(){
  return (
    <a className={anchorClasses} href='tel:16165002366'>
      <div className={divClasses}>
        <AiOutlinePhone className='text-2xl' />
        <p>(1) 616-500-2366</p>
      </div>
    </a>
  )
}
function LinkedIn(){
  return (
    <a className={anchorClasses} target='_blank' href='https://www.linkedin.com/in/mattgehrls'>
      <div className={divClasses}>
        <AiOutlineLinkedin className='text-2xl' />
        <p>in/mattgehrls</p>
      </div>
    </a>
  )
}
function Github(){
  return (
    <a className={anchorClasses} target='_blank' href='https://github.com/mgehrls'>
      <div className={divClasses}>
        <AiOutlineGithub className='text-2xl' />
        <p>mgehrls</p>
      </div>
    </a>
  )
}


const Contacts = () => {
  return (
    <div className='w-full max-w-sm mt-2 flex flex-col justify-center items-center'>
    <hr className='border-white w-full max-w-sm'/>
    <div className='flex flex-col w-full max-w-xs justify-between items-center'>
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