import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";
import { ImCross } from "react-icons/im";

const Toggle = () => {
  const links = [
    {
      name: "Home",
      linked: "/",
      id: "1",
    },
    {
      name: "Blogs",
      linked: "/blogs",
      id: "3",
    },
    {
      name: "Menu",
      linked: "menu",
      id: "4",
    },
    {
      name: "Contact Us",
      linked: "contactus",
      id: "2",
    },
  ];
  const [isOpen, setisOpen] = useState(false);

  const [isToggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!isToggled);
  };

  return (
    <div
      className="md:hidden block cursor-pointer"
      onClick={() => setisOpen(!isOpen)}
    >
      <div onClick={handleToggle}>
        {isToggled ? (
          <ImCross className="text-3xl"></ImCross>
        ) : (
          <AiOutlineBars className="text-3xl"></AiOutlineBars>
        )}
      </div>

      {isOpen && (
        <div className="absolute bg-[#239974] bg-gradient-to-t from-[#307e41] to-[#248a69]  h-56 w-40 rounded-md px-3 py-5 top-16 right-0.5">
          <ul className="grid grid-cols-1">
            {links.map((link) => (
              <Link key={link} to={link.linked}>
                {link.name}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Toggle;
