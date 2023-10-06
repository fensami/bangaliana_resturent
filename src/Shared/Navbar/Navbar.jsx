// import { Link } from "react-router-dom";
import icon from '../../assets/user.png'
import cart from '../../assets/cart-shopping-fast.png'
import { Link } from "react-router-dom";
import Toggle from './Toggle';

// import { useState } from "react";

const Navbar = () => {

  const links = [
    {
      name: "Home", linked: '/', id: '1'
    },
    {
     name: "Blogs", linked: '/blogs' , id: '3'
    },
    {
      name: "Contact Us", linked: 'contactus', id: '2'
    }
  ]


  // const toggleOpen = useCallback(()=> {
  //   setisOpen(value => !value)
  // },[])
  // bg-[#a5234a]
  return (
    <div className="shadow-lg w-full fixed top-0 left-0 z-10 bg-opacity-20 bg-black text-white">
      <div className="flex justify-between items-center py-4 md:px-10 px-7">
        {/* <p className="text-3xl font-bold"> Bangaliana</p> */}
        <img className='w-12 h-12' src="/src/assets/navLogo.png" alt="" />


<div className='flex items-center gap-3'>
<ul className="md:block hidden gap-5 text-xl font-semibold">

{
  links.map((link) => (
    <Link className="ml-5" key={link} to={link.linked}>{link.name}</Link>
  ))
}
{/* <Link>Home</Link>
<Link>Contact Us</Link> */}
</ul>
<img className='w-11 h-11 p-2 rounded-full md:block hidden font-bold bg-white' src={icon} alt="" />

<img className='w-11 h-11 p-2 rounded-full md:block hidden font-bold bg-white' src={cart} alt="" />
</div>

        <Toggle></Toggle>
      </div>
    </div>
  );
};

export default Navbar;