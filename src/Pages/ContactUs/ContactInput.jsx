const ContactInput = () => {
  return (
    <div>
      <h1 className="text-5xl text-center text-black font-bold">Reservation</h1>



      <div className="grid grid-cols-1 md:grid-cols-2 mt-10">


        <article className="py-2 px-4">
          <p className="text-green-500 mb-3 text-xl font-bold">Name</p>
          
          <input
            type="text"
            placeholder="Asadur Jaman Nur"
            className=" text-2xl font-sans mb-3 outline-none bg-transparent placeholder:text-black w-full"
          />
          <hr className="border-black"  />
         
        </article>
        <article className="py-2 px-4">
          <p className="text-green-500 mb-3 text-xl font-bold">Your Email</p>
          
          <input
            type="text"
            placeholder="asadurjamannur@gmail.com"
            className=" text-2xl font-sans mb-3 outline-none bg-transparent placeholder:text-black w-full"
          />
          <hr className="border-black"  />
         
        </article>
        <article className="py-2 px-4">
          <p className="text-green-500 mb-3 text-xl font-bold">Your Number
</p>
          
          <input
            type="text"
            placeholder="018652475"
            className=" text-2xl font-sans mb-3 outline-none bg-transparent placeholder:text-black w-full"
          />
          <hr className="border-black"  />
         
        </article>
        <article className="py-2 px-4">
          <p className="text-green-500 mb-3 text-xl font-bold">Members
</p>
          
          <input
            type="text"
            placeholder="1 Person"
            className=" text-2xl font-sans mb-3 outline-none bg-transparent placeholder:text-black w-full"
          />
          <hr className="border-black"  />
         
        </article>
      
      </div>
     



      <article className="py-2 px-4">
          <p className="text-green-500 mb-3 text-xl font-bold">Message</p>
          
          <input
            type="text"
            placeholder="Message"
            className=" text-2xl mb-3 outline-none bg-transparent placeholder:text-black w-full"
          />
          <hr className="border-black"  />
         
        </article>


        <div className="flex justify-center py-10">
          <button className="bg-green-500 px-5 py-3 rounded-lg">Book A Table</button>
        </div>
    </div>
  );
};

export default ContactInput;
