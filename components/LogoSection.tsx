import NextLogo from "@/components/logos/NextLogo";
import SvelteKitLogo from "@/components/logos/SvelteKitLogo";
import FlutterLogo from "@/components/logos/FlutterLogo";
import NodeLogo from "@/components/logos/NodeLogo";
import ReactLogo from "@/components/logos/ReactLogo";
import SupabaseLogo from "@/components/logos/SupabaseLogo";
import T3Logo from "@/components/logos/T3Logo";
import TailwindLogo from "@/components/logos/TailwindLogo";
import TypescriptLogo from "@/components/logos/TypescriptLogo";

export default function LogoSection() {
  const anchorClasses =
    "place-self-center transition-all delay-75 duration-500 ease-in-out scale-50 xl:scale-100 hover:scale-75 focus:scale-75 xl:hover:scale-125 xl:focus:scale-125 z-0";
  return (
    <div className="flex flex-col">
      <h2 className="transition-all duration-500 py-4 xl:py-20 mb-8 text-2xl sm:text-3xl lg:text-5xl text-center font-bold">
        Tech I use
      </h2>
      <div className="grid grid-flow-row grid-cols-2 md:grid-cols-3 max-w-screen lg:gap-y-16 z-0 mb-8">
        <a
          href="https://nextjs.org/"
          aria-label="Go to Next JS' website"
          className={anchorClasses}
          target="_blank"
        >
          <NextLogo />
        </a>
        <a
          href="https://kit.svelte.dev/"
          aria-label="Go to Sveltekit's website"
          className={anchorClasses}
          target="_blank"
        >
          <SvelteKitLogo />
        </a>
        <a
          href="https://flutter.dev"
          aria-label="Go to Flutter's website"
          className={anchorClasses}
          target="_blank"
        >
          <FlutterLogo />
        </a>
        <a
          href="https://nodejs.org"
          aria-label="Go to Node's website"
          className={anchorClasses}
          target="_blank"
        >
          <NodeLogo />
        </a>
        <a
          href="https://react.dev/"
          aria-label="Go to React's website"
          className={anchorClasses}
          target="_blank"
        >
          <ReactLogo />
        </a>
        <a
          href="https://supabase.com/"
          aria-label="Go to Supabase's website"
          className={anchorClasses}
          target="_blank"
        >
          <SupabaseLogo />
        </a>
        <a
          href="https://create.t3.gg/"
          aria-label="Go to Create T3 App's website"
          className={`${anchorClasses} hidden md:block`}
          target="_blank"
        >
          <T3Logo />
        </a>
        <a
          href="https://tailwindcss.com/"
          aria-label="Go to Tailwind's website"
          className={anchorClasses}
          target="_blank"
        >
          <TailwindLogo />
        </a>
        <a
          href="https://www.typescriptlang.org/"
          aria-label="Go to Typescript's website"
          className={anchorClasses}
          target="_blank"
        >
          <TypescriptLogo />
        </a>
      </div>
    </div>
  );
}
