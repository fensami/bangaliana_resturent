import './TodayMenu.css'
import lips from '../../../assets/lips.png'

import { BsFillCartFill } from 'react-icons/bs';

const TodaysMenu = () => {
  // const shadowStyle = {
  //   boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  // };
  return (
    <div className='bg-slate-100'>
      <img src={lips} className='absolute right-0 md:block hidden' alt="" />
      <img src={lips} className='absolute md:block hidden' alt="" />
      <h1 className="pt-10 shadow text-center text-5xl font-bold text-[#186049]">Todays Menu</h1>

      <div className='grid gap-5 mt-20 grid-cols-1 md:grid-cols-4 md:mx-10'>



        <article className="card bg-[url('https://i.pinimg.com/736x/56/bb/4e/56bb4ed61ef4b22ebf87c2ea4d618152.jpg')] bg-cover bg-center h-screen w-80 mx-auto relative text-white">
          {/* <p>hello</p> */}
         
         <div className='content-1'>
          <h1 className='text-center text-xl font-bold pt-5'>pasta</h1>
          <p className='text-center text-semibold text-xl'>Lorem ipsum dolor sit.</p>
         </div>

          <div className='content bg-black text-white bg-opacity-20 h-full'>
           <div className='flex justify-between'>
           <article>
           <h1 className='text-xl font-semibold pt-2 px-2'>Pasta</h1>
            <p className='text-xl font-semibold px-2'>$ 20</p>
           </article>

           <BsFillCartFill className='text-3xl '></BsFillCartFill>
           </div>


          </div>


        </article>
       
       

     
      </div>



    

    </div>
  );
};

export default TodaysMenu;