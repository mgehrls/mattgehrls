import Header from "@/components/Header";
import LayoutWrapper from "@/components/LayoutWrapper";
import Navbar from "@/components/Navbar";

export default function Portfolio() {
  return (
    <div className="flex flex-col items-center w-screen overflow-x-hidden text-slate-200">
      <div className="w-full max-w-lg flex flex-col h-screen max-h-screen lg:max-h-none">
        <div className="order-1">
          <Header />
        </div>
        <div className="order-3 lg:order-2">
          <Navbar />
        </div>
        <div className="order-2 flex-1 flex max-h-screen h-full lg:order-3">
          <LayoutWrapper>
            <div className="w-full p-4">
              <h1 className="text-3xl font-bold">Portfolio</h1>
              <hr className="h-1 w-full" />
              <h3 className="text-xl font-bold">Coming Soon</h3>
            </div>
          </LayoutWrapper>
        </div>
      </div>
    </div>
  );
}
