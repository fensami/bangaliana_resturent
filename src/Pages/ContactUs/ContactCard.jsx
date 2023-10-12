import { TfiLocationPin } from "react-icons/tfi";
import { BsClockHistory, BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import ContactInput from "./ContactInput";

const ContactCard = () => {
  return (
    <>
      <div className="bg-gray-200">
        <div className="grid mt-28 grid-cols-1 md:grid-cols-4 gap-10  rounded-lg p-5">
          <div>
            <article className="">
              <div className="bg-slate-100 hover:bg-[#239974] hover:bg-gradient-to-t hover:from-[#307e41] hover:to-[#248a69] duration-1000  text-black hover:text-white shadow-md shadow-slate-900 px-5 py-4 text-center contactCardbg rounded-lg">

                
                  <div className="flex justify-center">
                  <TfiLocationPin className="text-7xl"></TfiLocationPin>
                  </div>
            
                <div className="px-2 py-10">
                  <h1 className="text-xl">Location</h1>
                  <p>6952 Shelley St Melbource asdfasdfsdf</p>
                </div>
              </div>
            </article>
          </div>


          <div>
            <article className="">
              <div className="bg-slate-100 hover:bg-[#239974] hover:bg-gradient-to-t hover:from-[#307e41] hover:to-[#248a69] duration-1000  text-black hover:text-white shadow-md shadow-slate-900 px-5 py-4 text-center contactCardbg rounded-lg">

                
                  <div className="flex justify-center">
                  <BsTelephone className="text-7xl"></BsTelephone>
                  </div>
            
                <div className="px-2 py-10">
                  <h1 className="text-xl">Phone Number</h1>
                  <p>+(800) 800-900-100 <br />
+222 33 567 8665</p>
                </div>
              </div>
            </article>
          </div>


          <div>
            <article className="">
              <div className="bg-slate-100 hover:bg-[#239974] hover:bg-gradient-to-t hover:from-[#307e41] hover:to-[#248a69] duration-1000  text-black hover:text-white shadow-md shadow-slate-900 px-5 py-4 text-center contactCardbg rounded-lg">

                
                  <div className="flex justify-center">
                  <FiMail className="text-7xl"></FiMail>
                  </div>
            
                <div className="px-2 py-10">
                  <h1 className="text-xl">Email Address


</h1>
                  <p>Info@Webmail.com
Info@Example.web.com</p>
                </div>
              </div>
            </article>
          </div>



          <div>
            <article className="">
              <div className="bg-slate-100 hover:bg-[#239974] hover:bg-gradient-to-t hover:from-[#307e41] hover:to-[#248a69] duration-1000  text-black hover:text-white shadow-md shadow-slate-900 px-5 py-4 text-center contactCardbg rounded-lg">

                
                  <div className="flex justify-center">
                  <BsClockHistory className="text-7xl"></BsClockHistory>
                  </div>
            
                <div className="px-2 py-10">
                  <h1 className="text-xl">Open & Closing</h1>
                  <p>Mon - Fri: 09:00am
to 07.00pm</p>
                </div>
              </div>
            </article>
          </div>
      
        </div>

        <ContactInput></ContactInput>
      </div>
    </>
  );
};

export default ContactCard;
