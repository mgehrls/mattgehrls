import FitForPublicConsumption from "@/components/blogPosts/FitForPublicConsumption";
import AddingMore from "@/components/blogPosts/AddingMore";

export default function Blog() {
  return (
    // <AnimatePresence>
    //   <motion.div
    //     initial={{ opacity: 0, y: 15 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     exit={{ opacity: 0, y: 15 }}
    <div className="flex-1 order-2 h-full p-4">
      <div className="flex justify-center items-center">
        <div className="max-w-2xl">
          <h1 className="pt-4 pl-4 text-3xl font-bold">Blog</h1>
          <div className="p-4">
            <AddingMore />
          </div>
          <div className="p-4">
            <FitForPublicConsumption />
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* </motion.div>
    </AnimatePresence> */
}
