import Image from 'next/image';

const GithubStats = () => {
    return(
        <div className='flex flex-col gap-2 justify-center items-center'>
            <Image width={384} height={600} alt="My github stats" src="https://github-readme-stats.vercel.app/api?username=mgehrls&show_icons=true&theme=dark&hide_rank=true" />
            <Image width={384} height={400} alt="My most used programming languages" src="https://github-readme-stats.vercel.app/api/top-langs/?username=mgehrls&theme=dark" />
        </div>

    )
}

export default GithubStats;
