import { SlCalender } from 'react-icons/sl';
import { PiChatCircleDotsThin } from 'react-icons/pi';
import { useEffect, useState } from 'react';


const BlogCard = () => {
  const [blogs, setBlogs] = useState([])
  useEffect(()=> {
    fetch('blogs.json')
    .then(res => res.json())
    .then(data => {setBlogs(data)})
  },[])
  return (
    <>

    {
      blogs.map((blog, index)=> <article key={index} className=" rounded-3xl shadow-lg">
      <div className="overflow-hidden rounded-t-3xl">
      <img className="h-72 w-full  scale-100 hover:scale-125 duration-500" src={blog.image} alt="" />
      </div>


        <div className="p-4 text-slate-700">
          <div className="my-2 flex justify-between font-semibold">
            <div className='flex justify-center items-center gap-3'>
              <SlCalender></SlCalender>
            <p>02 Oct 2023</p>
            </div>


            <p className='flex items-center gap-2'><PiChatCircleDotsThin></PiChatCircleDotsThin>2.5k</p>
          </div>

          <h1 className="text-3xl font-bold my-5">{blog.name}</h1>
          <p className='text-lg'>{blog.title}</p>
        </div>

       <div className="flex justify-center my-5">
       <button className="px-6 border py-3 bg-green-700 text-xl rounded-lg text-white font-bold"> Read More</button>
       </div>
    </article> )
    }
       

    </>
  );
};

export default BlogCard;