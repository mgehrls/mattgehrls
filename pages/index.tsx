import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const path = usePathname();

  return (
    <div className="md:px-4 flex flex-col justify-center items-center gap-4">
      <h1 className="py-20 text-3xl font-bold text-center">
        Dynamic, responsive software w/ the latest tech for web and mobile
      </h1>
      <Image
        width={384}
        height={600}
        alt="My github stats"
        src="https://github-readme-stats-mgehrls.vercel.app/api?username=mgehrls&show_icons=true&theme=dark&hide_rank=true"
      />
      <Image
        width={384}
        height={400}
        alt="My most used programming languages"
        src="https://github-readme-stats-mgehrls.vercel.app/api/top-langs/?username=mgehrls&theme=dark"
      />
    </div>
  );
}
