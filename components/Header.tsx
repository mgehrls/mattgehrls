import Navbar from "./Navbar";
import { ThemeChanger } from "./ThemeChanger";

const Header = () => {
  return (
    <header className="w-screen flex justify-between items-center px-8 py-6 bg-lightSecondary dark:bg-[#0C0C0C]">
      <div>
        <p>Matt Gehrls</p>
        <p>Web Developer</p>
      </div>
      <div className="flex items-center gap-8">
        <Navbar />
        <ThemeChanger />
      </div>
    </header>
  );
};

export default Header;
