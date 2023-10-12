import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper/modules";
import { LuCalendarDays } from "react-icons/lu";
import { useEffect, useState } from "react";
import Title from "../../../utils/Title";
const NewsBlog = () => {
  const [Blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <>
  
      <Title title=" News & Blogs"></Title>



      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 0,
          shadowScale: 0,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        {Blogs.map((Blog, index) => (
          <SwiperSlide key={index}>
            <article className=" shadow-md shadow-emerald-600 border-green-600 my-10 h-96 md:mx-40  md:flex gap-5 justify-center items-center  rounded-lg">
              <img src={Blog.image} className="rounded-s-lg w-96" alt="" />

              <div className="px-5 py-3">
                <div className="py-3 font-bold text-lg flex gap-5 items-center">
                  <div className="flex items-center gap-2">
                    <LuCalendarDays></LuCalendarDays>
                    <p> 01 Oct 2023</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <p>1.5 K</p>
                  </div>
                </div>

                <h1 className="text-xl font-semibold">{Blog.name}</h1>
                <p className="">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
                  provident ipsa quaerat modi rerum mollitia doloremque illum
                  suscipit esse fuga!
                </p>
                <button className="border px-3 py-2 rounded-lg bg-green-700 font-bold text-white mt-4">
                  Read More
                </button>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default NewsBlog;
