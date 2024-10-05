import Navbar from "./Navbar";
import { ThemeChanger } from "./ThemeChanger";

const Header = () => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 text-right items-center relative">
      <ThemeChanger />
      <div className="text-left">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl dark:text-slate-200">
          <a href="/">Matt Gehrls</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl  dark:text-slate-200">
          Full Stack Web Dev
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          Master of API Integration
        </p>
        <p className="max-w-xs leading-normal">Champion of Accessibility</p>
        <p className="max-w-xs leading-normal">Figma to Code pixel perfect.</p>
        <p className="mt-8 max-w-xs leading-normal">I&apos;ve got you.</p>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
