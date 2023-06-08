import Header from "@/components/Header";
import LayoutWrapper from "@/components/LayoutWrapper";
import Navbar from "@/components/Navbar";
import FitForPublicConsumption from "@/components/blogPosts/FitForPublicConsumption";

export default function Blog() {
  return (
    <div className="flex flex-col items-center order-1 max-h-screen h-screen w-screen text-slate-200">
      <div className="max-w-lg">
        <Header />
        <Navbar />
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
  );
}
