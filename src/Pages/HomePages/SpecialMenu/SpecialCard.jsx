import { useEffect, useState } from "react";

const SpecialCard = () => {

  const [specials, setSpecials] = useState([])
  useEffect(()=> {
    fetch('special.json')
    .then(res => res.json())
    .then(data => setSpecials(data))
  },[])
  return (
    <>

    {
      specials.map((special, index)=><article key={index} className="speical_spin  rounded-lg py-5 md:w-80 drop-shadow-xl bg-[#239974] bg-gradient-to-t from-[#307e41] to-[#248a69] text-slate-100">

      <div className='background_b'>
      
      <div className="py-4">
      <img className="rounded-full border-[6px] border-white animate-spin1 w-28 h-28 mx-auto" src={special.image} alt="" />
      </div>
      <div className="text-center">
      <h1 className="text-2xl mt-5 font-bold ">{special.name}</h1>
      <p className="font-semibold mt-4 ">Lorem ipsum dolor sit amet consectetur adipisicing</p>
      <p className="my-4 text-3xl font-semibold ">$55.00</p>
      
      <button className="bg-white px-4 text-xl font-bold rounded-lg py-2 shadow-black text-black shadow-sm">Add To Cart</button>
      </div>
      </div>
      </article> )
    }
       
    </>
  );
};

export default SpecialCard;