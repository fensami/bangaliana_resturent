// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

// import './styles.css';
// import './News.css'

// import required modules
import { EffectCube, Pagination } from 'swiper/modules';
import { LuCalendarDays } from 'react-icons/lu';
const NewsBlog = () => {
  return (
    <>

<Swiper
        effect={'cube'}
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
        <SwiperSlide>
        <article className="border border-green-600 mx-auto my-10 h-96 md:w-[800px]  md:flex gap-5 justify-center items-center  rounded-lg">
        <img
          src="https://swigo.w3itexpert.com/xhtml/assets/images/blog/grid/pic2.jpg"
          className='rounded-s-lg'
          alt=""
        />

        <div className="px-5 py-3">
        <div className="py-3 font-bold text-lg flex gap-5 items-center">
         <div className="flex items-center gap-2">
         <LuCalendarDays></LuCalendarDays>
          <p> 01 Oct 2023</p>
         </div>
         <div className="flex items-center gap-1">

          {/* <AiOutlineMessage></AiOutlineMessage> */}
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
        </SwiperSlide>
        <SwiperSlide>
        <article className="border border-green-600 mx-auto my-10 h-96 md:w-[800px]  md:flex gap-5 justify-center items-center  rounded-lg">
        <img
          src="https://swigo.w3itexpert.com/xhtml/assets/images/blog/grid/pic2.jpg"
          className='rounded-s-lg'
          alt=""
        />

        <div className="px-5 py-3">
        <div className="py-3 font-bold text-lg flex gap-5 items-center">
         <div className="flex items-center gap-2">
         <LuCalendarDays></LuCalendarDays>
          <p> 01 Oct 2023</p>
         </div>
         <div className="flex items-center gap-1">

          {/* <AiOutlineMessage></AiOutlineMessage> */}
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
        </SwiperSlide>
        <SwiperSlide>
        <article className="border border-green-600 mx-auto my-10 h-96 md:w-[800px]  md:flex gap-5 justify-center items-center  rounded-lg">
        <img
          src="https://swigo.w3itexpert.com/xhtml/assets/images/blog/grid/pic2.jpg"
          className='rounded-s-lg'
          alt=""
        />

        <div className="px-5 py-3">
        <div className="py-3 font-bold text-lg flex gap-5 items-center">
         <div className="flex items-center gap-2">
         <LuCalendarDays></LuCalendarDays>
          <p> 01 Oct 2023</p>
         </div>
         <div className="flex items-center gap-1">

          {/* <AiOutlineMessage></AiOutlineMessage> */}
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
        </SwiperSlide>
        <SwiperSlide>
        <article className="border border-green-600 mx-auto my-10 h-96 md:w-[800px]  md:flex gap-5 justify-center items-center  rounded-lg">
        <img
          src="https://swigo.w3itexpert.com/xhtml/assets/images/blog/grid/pic2.jpg"
          className='rounded-s-lg'
          alt=""
        />

        <div className="px-5 py-3">
        <div className="py-3 font-bold text-lg flex gap-5 items-center">
         <div className="flex items-center gap-2">
         <LuCalendarDays></LuCalendarDays>
          <p> 01 Oct 2023</p>
         </div>
         <div className="flex items-center gap-1">

          {/* <AiOutlineMessage></AiOutlineMessage> */}
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
        </SwiperSlide>
        <SwiperSlide>
        <article className="border border-green-600 mx-auto my-10 h-96 md:w-[800px]  md:flex gap-5 justify-center items-center  rounded-lg">
        <img
          src="https://swigo.w3itexpert.com/xhtml/assets/images/blog/grid/pic2.jpg"
          className='rounded-s-lg'
          alt=""
        />

        <div className="px-5 py-3">
        <div className="py-3 font-bold text-lg flex gap-5 items-center">
         <div className="flex items-center gap-2">
         <LuCalendarDays></LuCalendarDays>
          <p> 01 Oct 2023</p>
         </div>
         <div className="flex items-center gap-1">

          {/* <AiOutlineMessage></AiOutlineMessage> */}
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
        </SwiperSlide>
        <SwiperSlide>
        <article className="border border-green-600 mx-auto my-10 h-96 md:w-[800px]  md:flex gap-5 justify-center items-center  rounded-lg">
        <img
          src="https://swigo.w3itexpert.com/xhtml/assets/images/blog/grid/pic2.jpg"
          className='rounded-s-lg'
          alt=""
        />

        <div className="px-5 py-3">
        <div className="py-3 font-bold text-lg flex gap-5 items-center">
         <div className="flex items-center gap-2">
         <LuCalendarDays></LuCalendarDays>
          <p> 01 Oct 2023</p>
         </div>
         <div className="flex items-center gap-1">

          {/* <AiOutlineMessage></AiOutlineMessage> */}
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
        </SwiperSlide>
        
       
      

      </Swiper>



      



    </>
  );
};

export default NewsBlog;
