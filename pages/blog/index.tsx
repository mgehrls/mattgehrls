import FitForPublicConsumption from "@/components/blogPosts/FitForPublicConsumption";

export default function Blog() {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-2xl">
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
    </div>
  );
}
