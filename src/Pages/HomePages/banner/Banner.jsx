import './Banner.css'
const Banner = () => {
  return (
    <div className='banner'>
      <div className='md:text-5xl text-3xl bg-[#a5234a] h-full w-full bg-opacity-10  text-white font-bold '>
        <p className='pt-10 md:pl-5 px-3 md:px-0'>Welcome to Bangaliana Resturent</p>
        <p className='pt-5 md:pl-5 px-3 md:px-0 font-semibold'>Bengali Culinary House</p>
        {/* <p className='pt-10 pl-5'>We Provied A Cultural Experience</p> */}
      </div>

    </div>
  );
};

export default Banner;