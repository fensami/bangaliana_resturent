import { GiShatteredGlass } from 'react-icons/gi';

const CardTwo = () => {
  return (
    <>
      <article className="bg-white hover:scale-y-105 duration-300 hover:duration-300 scale-y-100 text-slate-600 shadow-black drop-shadow-md	 rounded-lg  hover:bg-[url('https://www.licious.in/blog/wp-content/uploads/2022/05/shutterstock_1903754356-min-750x750.jpg')] hover:bg-cover hover:bg-center mx-auto bg-gradient-to-t hover:text-white">
          <div className="text-center px-3 py-5 rounded-lg hover:from-[#529661] hover:to-[#248a69] hover:bg-[#248a69] hover:bg-opacity-75 hover:w-full hover:h-full">
            <div className="flex justify-center items-center">
              <GiShatteredGlass className="text-5xl"></GiShatteredGlass>
            </div>

            <p className="text-3xl mt-5 font-semibold ">Bar</p>
            <p className="my-2 text-semibold text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, ea.
            </p>
          </div>
        </article> 
    </>
  );
};

export default CardTwo;