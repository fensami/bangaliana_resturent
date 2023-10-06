import { LuCalendarDays } from "react-icons/lu";
import { AiOutlineMessage } from "react-icons/ai";

const NewsBlog = () => {
  return (
    <div className="grid grid-cols-2 mx-10 gap-5">
      <article className="border my-10 flex gap-5 rounded-lg">
        <img
          src="https://swigo.w3itexpert.com/xhtml/assets/images/blog/grid/pic2.jpg"
          className="h-60"
          alt=""
        />

        <div className="py-3 px-10">
        <div className="py-3 font-bold text-lg flex gap-5 items-center">
         <div className="flex items-center gap-2">
         <LuCalendarDays></LuCalendarDays>
          <p> 01 Oct 2023</p>
         </div>
         <div className="flex items-center gap-1">

          <AiOutlineMessage></AiOutlineMessage>
          <p>1.5 K</p>
         </div>
        </div>


          <h1 className="text-xl font-semibold">The space route taste</h1>
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
            provident ipsa quaerat modi rerum mollitia doloremque illum suscipit
            esse fuga!
          </p>
          <button className="border px-3 py-2 rounded-lg bg-green-700 font-bold text-white mt-4">Read More</button>
        </div>
      </article>




      <article className="border my-10 flex gap-5 justify-between">
        <img
          src="https://swigo.w3itexpert.com/xhtml/assets/images/blog/grid/pic2.jpg"
          className="h-60"
          alt=""
        />

        <div className="py-3 px-10">
          <h1 className="text-xl font-semibold">the space route taste</h1>
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
            provident ipsa quaerat modi rerum mollitia doloremque illum suscipit
            esse fuga!
          </p>
          <button>Read More</button>
        </div>
      </article>
    </div>
  );
};

export default NewsBlog;
