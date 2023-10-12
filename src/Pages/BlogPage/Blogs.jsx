import BlogBanner from "./BlogBanner";
import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <>
      <div className="mt-16">
        <BlogBanner></BlogBanner>
      </div>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-3 md:m-10 m-2">
        <BlogCard></BlogCard>
      </div>
    </>
  );
};

export default Blogs;
