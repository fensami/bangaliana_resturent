const Footer = () => {
  return (
    <>
    <div className="bg-black">
      <div className="md:flex mt-72 py-5 md:mt-0 justify-between px-10  text-white">
        
        <ul>
          <li className="mb-5 text-2xl font-bold">Contact</li>
          <li className="mb-5">1247/Plot No. 39, 15th Phase, <br /> Colony, Kkatpally, Hyderabad</li>
          <li className="mb-5">+91 987-654-3210 <br /> +91 123-456-7890</li>
        </ul>

        <ul>
          <li className="mb-5 text-2xl font-bold">Our Links</li>
          <li className="mb-5">Home</li>
          <li className="mb-5">About us</li>
          <li className="mb-5">Service</li>
          <li className="mb-5">Blogs</li>
        </ul>

        <ul className="flex-col">
  <li className="mb-5 text-2xl font-bold">Our Services</li>
  <li className="mb-5">Strategy & Research</li>
  <li className="mb-5">Fast Delivery</li>
  <li className="mb-5">Seat Reservation</li>
  <li className="mb-5">Pickup In Store</li>
  <li className="mb-5">Our Menu</li>
</ul>

        <ul>
          <li className="mb-5 text-2xl font-bold">Help center</li>
          <li className="mb-5">FAQ</li>
          <li className="mb-5">Shop</li>
          <li className="mb-5">Categroy Filter</li>
          <li className="mb-5">Testimonials</li>
          <li className="mb-5">Contact Us</li>
        </ul>


        </div>
      <hr className="md:w-[1200px] mx-auto" />

    <div className="md:flex md:justify-between gap-5 py-4  mx-2 md:font-sans text-green-600 md:px-10">
      <h1 className="text-center">Copyright 2023 All rights reserved.</h1>

      <p className="text-center">Powered By Bangaliana</p>
    </div>
      </div>
    </>
  );
};

export default Footer;
