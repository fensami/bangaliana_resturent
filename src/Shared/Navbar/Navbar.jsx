import icon from '../../assets/user.png'
import cart from '../../assets/cart-shopping-fast.png'
import { NavLink } from "react-router-dom";
import Toggle from './Toggle';
import './Navbar.css'

const Navbar = () => {

  const links = [
    {
      name: "Home", linked: '/', id: '1'
    },
    {
     name: "Blogs", linked: '/blogs' , id: '3'
    },
    {
      name: "Menu", linked: 'menu', id: '4'
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
    <div className="shadow-lg w-full fixed top-0 left-0 z-10 bg-opacity-20 bg-[#239974] bg-gradient-to-t from-[#307e41] to-[#248a69] text-white">
      <div className="flex justify-between items-center py-2 md:py-3 md:px-10 px-7">
       <div className='flex items-center gap-3'>
       <img className='md:w-12 md:h-12 w-9 h-9 rounded-full' src="https://play-lh.googleusercontent.com/rfB_azG4EK-K1Dpiw9jaJsEWPZAF905QZfNVDPEg5Ec_93VouIlnE5MsTdJUuv-p-q8j=s256-rw"  alt="" />
        <p className="text-lg md:text-3xl font-bold"> Bangaliana</p>
       </div>


<div className='flex items-center gap-3'>
<ul className="md:block hidden text-lg font-semibold">

{/* {
  links.map((link) => (
    <Link className="ml-5 text-2xl" key={link} to={link.linked}>{link.name}</Link>
  ))
} */}
{
  links.map((link) => (
    <NavLink key={link}  
  to={link.linked}
  className={`${({ isActive, isPending }) =>
  isPending ? "pending" : isActive ? "active" : ""} ml-5`
  }
>
{link.name}

</NavLink>
  ))
}
{/* <Link>Home</Link>
<Link>Contact Us</Link> */}
</ul>
<img className='w-10 h-10 p-2 rounded-lg md:block hidden font-bold bg-white' src={icon} alt="" />

<img className='w-10 h-10 p-2 rounded-lg md:block hidden font-bold bg-white' src={cart} alt="" />
</div>

        <Toggle></Toggle>
      </div>
    </div>
  );
};

export default Navbar;