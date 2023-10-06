import { IoRestaurant } from "react-icons/io5";
import { GiShatteredGlass} from "react-icons/gi";
import { IoMdCafe} from "react-icons/io";
import { LuDessert} from "react-icons/lu";
import "./QualityServices.css";

const QualityServices = () => {
  return (
    <div className=" py-5 bg-slate-100">
      <h1 className="text-5xl font-bold text-center py-20">Quality Services</h1>

      <div className="relative gap-2 md:gap-0 -bottom-20 mx-10 grid-cols-1 grid md:grid-cols-4">




        <article className="bg-white hover:scale-y-105 duration-300 hover:duration-300 scale-y-100 text-slate-600 shadow-black drop-shadow-md	 rounded-lg  hover:bg-[url('https://efoodsdirect.co.uk/wp-content/uploads/2021/09/rui_11zon1.jpg')] hover:bg-cover hover:bg-center mx-auto bg-gradient-to-t hover:text-white">
          <div className="text-center px-3 py-5 rounded-lg hover:from-[#529661] hover:to-[#248a69] hover:bg-[#248a69] hover:bg-opacity-75 hover:w-full hover:h-full">
            <div className="flex justify-center items-center">
              <IoRestaurant className="text-5xl"></IoRestaurant>
            </div>

            <p className="text-3xl mt-5 font-semibold ">Resturent</p>
            <p className="my-2 text-semibold text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, ea.
            </p>
          </div>
        </article>


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


        <article className="bg-white hover:scale-y-105 duration-300 hover:duration-300 scale-y-100 text-slate-600 shadow-black drop-shadow-md	 rounded-lg  hover:bg-[url('https://i1.wp.com/thegastronomicbong.com/wp-content/uploads/2020/04/MURGIR-JHOL-scaled.jpg?fit=1707%2C2560&ssl=1')] hover:bg-cover hover:bg-center mx-auto bg-gradient-to-t hover:text-white">
          <div className="text-center px-3 py-5 rounded-lg hover:from-[#529661] hover:to-[#248a69] hover:bg-[#248a69] hover:bg-opacity-75 hover:w-full hover:h-full">
            <div className="flex justify-center items-center">
              <IoMdCafe className="text-5xl"></IoMdCafe>
            </div>

            <p className="text-3xl mt-5 font-semibold ">Cafe</p>
            <p className="my-2 text-semibold text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, ea.
            </p>
          </div>
        </article>


        <article className="bg-white hover:scale-y-105 duration-300 hover:duration-300 scale-y-100 text-slate-600 shadow-black drop-shadow-md	 rounded-lg  hover:bg-[url('https://kitchenofdebjani.com/wp-content/uploads/2018/10/Chicken-Dak-Bungalow-Debjanir-Rannaghar.jpg')] hover:bg-cover hover:bg-center mx-auto bg-gradient-to-t hover:text-white">
          <div className="text-center px-3 py-5 rounded-lg hover:from-[#529661] hover:to-[#248a69] hover:bg-[#248a69] hover:bg-opacity-75 hover:w-full hover:h-full">
            <div className="flex justify-center items-center">
              <LuDessert className="text-5xl"></LuDessert>
            </div>

            <p className="text-3xl mt-5 font-semibold ">Dessert</p>
            <p className="my-2 text-semibold text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, ea.
            </p>
          </div>
        </article>




        {/* <article className="bg-white hover:scale-y-105 duration-300 hover:duration-300 scale-y-100 text-slate-600 shadow-black shadow-lg rounded-lg  hover:bg-[url('https://efoodsdirect.co.uk/wp-content/uploads/2021/09/rui_11zon1.jpg')] hover:bg-cover hover:bg-center mx-auto relative bg-gradient-to-t hover:text-white">
          <div className="text-center px-3 py-5 rounded-lg hover:from-[#529661] hover:to-[#248a69] hover:bg-[#248a69] hover:bg-opacity-75 hover:w-full hover:h-full">
            <div className="flex justify-center items-center">
              <IoRestaurant className="text-5xl"></IoRestaurant>
            </div>

            <p className="text-3xl mt-5 font-semibold ">Resturent</p>
            <p className="my-2 text-semibold text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, ea.
            </p>
          </div>
        </article>



        
        <article className="bg-white hover:scale-y-105 duration-300 hover:duration-300 scale-y-100 text-slate-600 shadow-black shadow-lg rounded-lg  hover:bg-[url('https://efoodsdirect.co.uk/wp-content/uploads/2021/09/rui_11zon1.jpg')] hover:bg-cover hover:bg-center mx-auto relative bg-gradient-to-t hover:text-white">
          <div className="text-center px-3 py-5 rounded-lg hover:from-[#529661] hover:to-[#248a69] hover:bg-[#248a69] hover:bg-opacity-75 hover:w-full hover:h-full">
            <div className="flex justify-center items-center">
              <IoRestaurant className="text-5xl"></IoRestaurant>
            </div>

            <p className="text-3xl mt-5 font-semibold ">Resturent</p>
            <p className="my-2 text-semibold text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, ea.
            </p>
          </div>
        </article> */}



     




      </div>
    </div>
  );
};

export default QualityServices;
