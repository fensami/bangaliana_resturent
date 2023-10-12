import { CgCalendarDates, CgProfile } from 'react-icons/cg';
import { FiPhoneCall } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { BiTimeFive } from 'react-icons/bi';

const Reservation = () => {
  return (
    <div className="mt-36">
      <form className=" bg-[url('https://d3ox4wjkl7mf3m.cloudfront.net/feed_stories/ctshKg5hgQxy6b8fYFSR9TUzxrTqJGXKkxNuUuUL.jpeg')] bg-cover bg-center bg-fixed text-white ">
        <div className="h-full backdrop-blur-sm bg-black bg-opacity-70 py-20">
          <h1 className="text-center alltext-shadow md:text-5xl font-bold text-4xl my-5 relative">
            Reservation
          </h1>

          <div className="grid gap-5 md:grid-cols-3 grid-cols-1 py-10 md:mx-20">
            <article className="px-5">
             <div className='flex gap-5 mb-3'>
             <CgProfile className='text-4xl'></CgProfile>
              <input
                type="text"
                placeholder="Your Name"
                className=" text-2xl font-sans mb-3 outline-none bg-transparent placeholder-white w-full "
              />
             </div>
              <hr className="border" />
            </article>



            <article className="px-5">

              <div className='flex gap-5 mb-3'>
<FiPhoneCall className='text-4xl'></FiPhoneCall>
              <input
                type="text"
                placeholder="Phone Number"
                className="font-sans text-2xl mb-3 outline-none bg-transparent placeholder-white w-full"
                />
                </div>
              <hr className="border" />
            </article>

            <article className="px-5">
              <div className='flex gap-5 mb-3'>
<HiOutlineMail className='text-4xl'></HiOutlineMail>
              <input
                type="text"
                placeholder="Your Email"
                className="font-sans text-2xl mb-3 outline-none bg-transparent placeholder-white w-full"
                />
                </div>
              <hr className="border" />
            </article>
            
            <article className="px-5 md:mt-10">
              <div className='flex gap-5 mb-3'>
<MdOutlinePeopleAlt className='text-4xl'></MdOutlinePeopleAlt>
              <input
                type="text"
                placeholder="Number Of People"
                className="text-2xl font-sans mb-3 outline-none bg-transparent placeholder-white w-full"
                />
                </div>
              <hr className="border" />
            </article>
            <article className="px-5 md:mt-10">
              <div className='flex gap-5 mb-3'>
<CgCalendarDates className='text-4xl'></CgCalendarDates>
              <input
                type="text"
                placeholder="Date"
                className="text-2xl font-sans mb-3 outline-none bg-transparent placeholder-white w-full"
                />
                </div>
              <hr className="border" />
            </article>
            <article className="px-5 md:mt-10">
              <div className='flex gap-5 mb-3'>
<BiTimeFive className='text-4xl'></BiTimeFive>
              <input
                type="text"
                placeholder="Time"
                className="text-2xl font-sans mb-3 outline-none bg-transparent placeholder-white w-full"
                />
                </div>
              <hr className="border" />
            </article>

          </div>


            <div className="flex justify-center items-center ">
              <button className="py-3 px-4 rounded-md hover:bg-[#186049] hover:duration-1000 font-sans text-2xl font-semibold bg-slate-200 text-black hover:text-slate-200 duration-1000">
                Book A Table
              </button>
            </div>


        </div>
      </form>
    </div>
  );
};

export default Reservation;
