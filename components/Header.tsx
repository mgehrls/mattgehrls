import Image from 'next/image';

const Header = () => {

    return (
        <div className='flex w-full max-w-sm min-w-xs gap-6 mt-12'>
          <div className='flex justify-center items-center rounded-full w-1/2'>
            <Image className='rounded-full shadow-xl' alt='Matt Gehrls Headshot' src='/images/square_headshot.jpg' width={150} height={150} />
          </div>
          <div className='flex flex-col gap-2 justify-center items-start w-1/2'>         
            <h1 className='text-2xl md:text-3xl font-bold tracking-wide'>Matt Gehrls</h1>
            <h3 className='text-md md:text-md font-semibold tracking-normal pb-4'>Full Stack Software Development</h3>
          </div>
        </div>
    );
    };

    export default Header;