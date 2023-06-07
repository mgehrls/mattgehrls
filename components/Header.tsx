import Image from 'next/image';
import Contacts from './Contacts';
import { useState } from 'react';

const Header = () => {

    const [showContactInfo, setShowContactInfo] = useState(false);

    return (
        <div className='w-full flex justify-between p-2 border-b border-white'>
          <div>
            <div className='flex gap-2 items-center justify-center'>
              <Image className='rounded-full shadow-xl w-12' alt='Matt Gehrls Headshot' src='/images/square_headshot.jpg' width={150} height={150} />
              <div>         
                <h1 className='font-bold'>Matt Gehrls</h1>
                <h3 className='text-xs'>Full Stack Dev</h3>
              </div>
            </div>
          </div>
          <button className='text-xs' onClick={()=>{setShowContactInfo(true)}}>Contact Info</button>
          {showContactInfo &&
          <div className='absolute top-0 right-0'>
          <Contacts showContactInfo setShowContactInfo={setShowContactInfo} />
          </div>
          }
          
        </div>
    );
    };

    export default Header;