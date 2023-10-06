// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { BsFillCartFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';
const FromOurMenu = () => {

  const [recipies, setRecipies] = useState([])
  useEffect(()=> {
    fetch('recipies.json')
    .then(res => res.json())
    .then(data => {setRecipies(data)})
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  },[])

  return (
    <>
    <h1 className='text-5xl font-bold text-center text-[#186049] mt-36'>From Our Menu</h1>
 <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
      >


        

       


{recipies.map((recipe,index)=>  <SwiperSlide key={index}> 
<article className="card bg-cover bg-center md:w-96 relative text-white" style={{ backgroundImage: `url(${recipe.image})` }}> 
         <div className='content-1 bg-gradient-to-t from-[#529661] to-[#248a69]'>
         <h1 className='bg-yellow-200 w-24 rounded-e-sm text-black px-1 py-1 hover:hidden block font-bold '>Top seller</h1>
          <h1 className='text-center text-xl font-bold pt-5'>{recipe.name}</h1>
          <p className='text-center text-semibold text-xl'>{recipe.title}</p>
         </div>
          <div className='content bg-black text-white bg-opacity-30 h-full relative'>
           <div className='flex justify-between'>
           <article className='absolute top-10 left-10'>
           <h1 className='text-2xl font-bold '>{recipe.name}</h1>
            <p className='text-xl font-bold'>$ 28</p>
           </article>
           <BsFillCartFill className='text-4xl absolute top-10 right-10 '></BsFillCartFill>
           </div>
          </div>
        </article>
         </SwiperSlide> )
          }
       


     
      </Swiper>
    </>
  );
};

export default FromOurMenu;