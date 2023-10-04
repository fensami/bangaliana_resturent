import './SpecialMenu.css'
const SpecialMenu = () => {
  return (
    <div className="my-10">
      <h1 className="text-center font-bold text-5xl text-[#186049]">Special Menu</h1>

      <div className="grid md:grid-cols-4 grid-cols-1 gap-4 px-2 md:px-10 my-5">

        <article className="hover:border-2 speical_spin hover:border-[#E4D5C7] border border-[#E4D5C7] rounded-lg py-5 md:w-72 drop-shadow-xl bg-[#186049] text-slate-100">

          <div className='background_b'>

          <div className="py-4">
          <img className="rounded-full border-[6px] border-white w-28 h-28 mx-auto" src="https://kitchenofdebjani.com/wp-content/uploads/2023/04/Bengali-Doi-Ilish-Recipe-Debjanir-Rannaghar.jpg" alt="" />
          </div>
          <div className="text-center">
          <h1 className="text-2xl mt-5 font-bold ">Hilsa Fish Curry</h1>
          <p className="font-semibold mt-4 ">Lorem ipsum dolor sit amet consectetur adipisicing</p>
          <p className="my-4 text-3xl font-semibold ">$55.00</p>

          <button className="bg-black px-4 text-xl font-bold text-white py-2 shadow-black shadow-sm rounded-lg">Add To Cart</button>

          </div>
          </div>
        </article>

        <article className="hover:border-2 speical_spin border rounded-lg py-5 md:w-72 drop-shadow-xl bg-[#186049] text-slate-100">

          <div className='background_b'>

          <div className="py-4">
          <img className="rounded-full border-[6px] border-white animate-spin1 w-28 h-28 mx-auto" src="https://t3.ftcdn.net/jpg/04/76/18/00/360_F_476180077_VNxoOxDZdZgpsajHpXwfiHYgmrOxfrmy.jpg" alt="" />
          </div>
          <div className="text-center">
          <h1 className="text-2xl mt-5 font-bold ">Biryani</h1>
          <p className="font-semibold mt-4  px-2">Bangladeshi biriyani is a flavorful and aromatic rice dish</p>
          <p className="my-4 text-3xl font-semibold ">$50.00</p>

          <button className="bg-black px-4 text-xl font-bold rounded-lg text-white py-2 shadow-black shadow-sm">Add To Cart</button>
          </div>
          </div>
        </article>
        <article className="hover:border-2 border speical_spin rounded-lg py-5 md:w-72 drop-shadow-xl bg-[#186049] text-slate-100">

          <div className='background_b'>

          <div className="py-4">
          <img className="rounded-full border-[6px] border-white animate-spin1 w-28 h-28 mx-auto" src="https://as2.ftcdn.net/v2/jpg/05/29/63/11/1000_F_529631161_KJWCbr0QdY7bkm66GRLoPjTt1fQAJCAM.jpg" alt="" />
          </div>
          <div className="text-center">
          <h1 className="text-2xl mt-5 font-bold ">Panta Ilish</h1>
          <p className="font-semibold mt-4 ">Lorem ipsum dolor sit amet consectetur adipisicing</p>
          <p className="my-4 text-3xl font-semibold ">$45.00</p>

          <button className="bg-black px-4 text-xl font-bold rounded-lg py-2 shadow-black shadow-sm">Add To Cart</button>
          </div>
          </div>
        </article>
        <article className="speical_spin  rounded-lg py-5 md:w-72 drop-shadow-xl bg-[#186049] text-slate-100">

          <div className='background_b'>

          <div className="py-4">
          <img className="rounded-full border-[6px] border-white animate-spin1 w-28 h-28 mx-auto" src="https://i.ytimg.com/vi/mx0oDJhpRQk/mqdefault.jpg" alt="" />
          </div>
          <div className="text-center">
          <h1 className="text-2xl mt-5 font-bold ">Bhapa Pitha</h1>
          <p className="font-semibold mt-4 ">Lorem ipsum dolor sit amet consectetur adipisicing</p>
          <p className="my-4 text-3xl font-semibold ">$55.00</p>

          <button className="bg-black px-4 text-xl font-bold rounded-lg py-2 shadow-black shadow-sm">Add To Cart</button>
          </div>
          </div>
        </article>


      
        
        
      </div>
    </div>
  );
};

export default SpecialMenu;