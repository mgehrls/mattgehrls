import Header from "@/components/Header";
import LayoutWrapper from "@/components/LayoutWrapper";
import Navbar from "@/components/Navbar";
import FitForPublicConsumption from "@/components/blogPosts/FitForPublicConsumption";

export default function Blog() {
  return (
    <div className="flex flex-col items-center w-screen overflow-x-hidden text-slate-200">
      <div className="max-w-lg flex flex-col max-h-screen lg:max-h-none">
        <div className="order-1">
          <Header />
        </div>
        <div className="order-3 lg:order-2">
          <Navbar />
        </div>
        <div className="order-2 flex-1 lg:order-3 overflow-y-scroll">
          <LayoutWrapper>
            <div>
              <h1 className="pt-4 pl-4 text-3xl font-bold">Blog</h1>
              <div className="px-4">
                <FitForPublicConsumption />
              </div>
              <div className="p-6">
                <FitForPublicConsumption />
              </div>
              <div className="p-6">
                <FitForPublicConsumption />
              </div>
              <div className="p-6">
                <FitForPublicConsumption />
              </div>
            </div>
          </LayoutWrapper>
        </div>
      </div>
    </div>
  );
}
