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
      <h1 className="pt-10 shadow text-center text-5xl font-bold text-[#186049]" >Todays Menu</h1>

      <div className='grid mt-20 gap-5 grid-cols-1 md:grid-cols-4 md:mx-10'>



        <article className="card bg-[url('https://efoodsdirect.co.uk/wp-content/uploads/2021/09/rui_11zon1.jpg')] bg-cover bg-center h-screen mx-auto relative text-white"> 
         <div className='content-1 bg-gradient-to-t from-[#529661] to-[#248a69]'>
         <h1 className='bg-yellow-200 w-24 rounded-e-sm text-black px-1 py-1 hover:hidden block font-bold '>Top seller</h1>
          <h1 className='text-center text-xl font-bold pt-5'>Macher Jhol</h1>
          <p className='text-center text-semibold text-xl'>Lorem ipsum dolor sit.</p>
         </div>
          <div className='content bg-black text-white bg-opacity-30 h-full relative'>
           <div className='flex justify-between'>
           <article className='absolute top-10 left-10'>
           <h1 className='text-2xl font-bold '>Macher Jhol</h1>
            <p className='text-xl font-bold'>$ 20</p>
           </article>
           <BsFillCartFill className='text-4xl absolute top-10 right-10 '></BsFillCartFill>
           </div>
          </div>
        </article>




        <article className="card bg-[url('https://notoutofthebox.in/wp-content/uploads/2013/12/di1.jpg')] bg-cover bg-center h-screen mx-auto relative text-white"> 
         <div className='content-1 bg-gradient-to-t from-[#529661] to-[#248a69]'>
         <h1 className='bg-yellow-200 w-24 rounded-e-sm text-black px-1 py-1 hover:hidden block font-bold '>Top seller</h1>
          <h1 className='text-center text-xl font-bold pt-5'>Shorshe Ilish</h1>
          <p className='text-center text-semibold text-xl'>Lorem ipsum dolor sit.</p>
         </div>
          <div className='content bg-black text-white bg-opacity-30 h-full relative'>
           <div className='flex justify-between'>
           <article className='absolute top-10 left-10'>
           <h1 className='text-2xl font-bold '>Shorshe Ilish</h1>
            <p className='text-xl font-bold'>$ 28</p>
           </article>
           <BsFillCartFill className='text-4xl absolute top-10 right-10 '></BsFillCartFill>
           </div>
          </div>
        </article>

        
        <article className="card bg-[url('https://www.kannammacooks.com/wp-content/uploads/baingan-bharta-eggplant-bharta-recipe.jpg')] bg-cover bg-center h-screen mx-auto relative text-white"> 
         <div className='content-1 bg-gradient-to-t from-[#529661] to-[#248a69]'>
         <h1 className='bg-yellow-200 w-24 rounded-e-sm text-black px-1 py-1 hover:hidden block font-bold '>Top seller</h1>
          <h1 className='text-center text-xl font-bold pt-5'>Bharta</h1>
          <p className='text-center text-semibold text-xl'>Lorem ipsum dolor sit.</p>
         </div>
          <div className='content bg-black text-white bg-opacity-30 h-full relative'>
           <div className='flex justify-between'>
           <article className='absolute top-10 left-10'>
           <h1 className='text-2xl font-bold '>Bharta</h1>
            <p className='text-xl font-bold'>$ 28</p>
           </article>
           <BsFillCartFill className='text-4xl absolute top-10 right-10 '></BsFillCartFill>
           </div>
          </div>
        </article>


        <article className="card bg-[url('https://images.food52.com/kqn_56lKtKpogASkORXJM2G24Rk=/1200x900/e26bf810-834f-4b08-b0fc-696391670022--2022-0301_mishti-aloor-pakon-pitha_3x2_rocky-luten_004.jpg')] bg-cover bg-center h-screen mx-auto relative text-white"> 
         <div className='content-1 bg-gradient-to-t from-[#529661] to-[#248a69]'>
         <h1 className='bg-yellow-200 w-24 rounded-e-sm text-black px-1 py-1 hover:hidden block font-bold '>Top seller</h1>
          <h1 className='text-center text-xl font-bold pt-5'>Pitha</h1>
          <p className='text-center text-semibold text-xl'>Lorem ipsum dolor sit.</p>
         </div>
          <div className='content bg-black text-white bg-opacity-30 h-full relative'>
           <div className='flex justify-between'>
           <article className='absolute top-10 left-10'>
           <h1 className='text-2xl font-bold '>Pitha</h1>
            <p className='text-xl font-bold'>$ 28</p>
           </article>
           <BsFillCartFill className='text-4xl absolute top-10 right-10 '></BsFillCartFill>
           </div>
          </div>
        </article>
       
       

     
      </div>


{/* <div className='bg-slate-100 py-20 relative'>
<h1 className='absolute h-11 bg-black bottom-'>kaku</h1>
</div> */}
    </div>
  );
};

export default TodaysMenu;