import Header from "@/components/Header";
import LayoutWrapper from "@/components/LayoutWrapper";
import Navbar from "@/components/Navbar";

export default function Contact() {
  return (
    <div className="flex flex-col items-center order-1 max-h-screen h-screen w-screen text-slate-200">
      <div className="w-full max-w-lg">
        <Header />
        <Navbar />
        <LayoutWrapper>
          <div className="w-full p-4">
            <h1 className="text-3xl font-bold">Contact</h1>
            <hr className="h-1 w-full" />
            <h3 className="text-xl font-bold">Coming Soon</h3>
          </div>
        </LayoutWrapper>
      </div>
    </div>
  );
}
